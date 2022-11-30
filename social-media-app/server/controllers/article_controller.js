const { Follow, Article, Favorite } = require("../models/model");
const formidable = require("formidable");
const fs = require("fs");

// 게시물 등록
exports.create = async (req, res, next) => {
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
        try {
            const loginUser = req.user;

            if (err) {
                return next(err);
            }

            const images = files.images instanceof Array ? files.images : new Array(files.images);

            // 이미지가 업로드 되지 않았을 때
            if(!images[0].originalFilename){
                const err = new Error("image must be specified");
                err.status = 400;
                return next(err);
            }

            // 이미지를 data/articles 경로에 저장한다
            const photos = images.map(photo => {
                const oldPath = photo.filepath;
                const ext = photo.originalFilename.split(".")[1]
                const newName = photo.newFilename + "." + ext;
                const newPath = `${__dirname}/../data/articles/${newName}`;

                // 랜덤 이름 생성
                fs.renameSync(oldPath, newPath);
                // 또는 fs.copyFileSync(oldPath, newPath);

                return newName;
            })

            // 데이터베이스 쿼리
            const article = new Article({
                description: fields.description,
                photos,
                user: loginUser._id
            })
            await article.save();

            res.json(article);

        }catch(error){
            next(error)
        }
    });
}


// 전체 게시물 가져오기
exports.article_list = async (req, res, next) => {
    try{

        // 데이터베이스 쿼리
        // Article.find 모델 컬렉션에 있는 모든 내용을 찾는다
        const articles = await Article.find()
            // sort 게시물의 작성일을 기준으로 정렬
            .sort([["created", "descending"]])

            // populate 유저의 아이디를 가지고 일치하는 정보를 return
            .populate("user") // 없을 경우 user의 id만 전달

            // 몇개의 데이터를 가져올지?
            .skip(req.query.skip)
            .limit(req.query.limit);

            res.json(articles);

    }catch(error){
        next(error)
    }
}