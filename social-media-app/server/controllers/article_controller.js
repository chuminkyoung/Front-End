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


// 게시물 하나 가져오기
exports.article = async (req, res, next) => {
    try{
        const loginUser = req.user;

        // 에러를 찾는 방법
        // console.log(req.user);
        // return;

        // url로 전달된 parameter로부터 id를 구한다
        const id = req.params.id;
        // 데이터베이스 쿼리
        const article = await Article
            .findById(id)
            .populate("user")
            .lean();

            // id에 일치하는 게시물이 없는 경우
        if (!article){
            const err = new Error("Article not found");
            err.status = 404;
            return next(err);
        }

        // article 데이터에 isFavorite 속성을 추가한다
        // isFavorite: 로그인 유저가 좋아하는 게시물이면 true, 아니면 false
        const favorite = await Favorite
            .findOne({ user: loginUser._id, article: article._id });
        article.isFavorite = !!favorite;
        // 위 내용과 같은 내용
        // article.isFavorite = favorite ? true : false;

        res.json(article);

    }catch (error){
        next(error)
    }
}


// 게시물 삭제하기
exports.delete = async (req, res, next) => {
    try{
        // 요청 url에 담긴 id값
        // params로 전달 된 id 가져오기
        const id = req.params.id;
        // 데이터베이스 쿼리
        const article = await Article
            // id로 특정 게시물을 찾기
            .findById(id);

        // id에 일치하는 게시물이 없을 때
        if (!article){
            const err = new Error("Article not found")
            err.status = 404;
            return next(err);
        }

        // 데이터베이스 쿼리
        await article.delete();

        // 클라이언트에게 전송하지 않고 서버가 종료 시킴
        res.end();

    }catch(error){
        next(error)
    }
}


// 좋아요
exports.favorite = async (req, res, next) => {
    try{
        const loginUser = req.user;
        // id를 요청 url에 담기
        const id = req.params.id;

        const article = await Article.findById(id);

        const favorite = await Favorite
            .findOne({ user: loginUser._id, article: article._id })

        // 이미 좋아요를 누른 게시물일 때
        if(favorite) {
            const err = new Error("Already favorite article");
            err.status = 400;
            return next(err)
        }

        // 데이터베이스 쿼리
        const newFavorite = new Favorite({
            user: loginUser._id,
            article: article._id
        })
        await newFavorite.save();

        // 게시물의 좋아요 수 (favoriteCount)를 1 증가시킨다
        article.favoriteCount++;
        await article.save();

        res.end();

    }catch(error){
        next(error)
    }
}


// 좋아요 취소
exports.unfavorite = async (req, res, next) => {
    try{
        const loginUser = req.user;
        const id = req.params.id

        const article = await Article.findById(id)

        const favorite = await Favorite
            .findOne({ user: loginUser._id, article: article._id });

        // 좋아요한 게시물이 아닐 때
        if (!favorite){
            const err = new Error("No article to unfavorite");
            err.status = 400;
            return next(err);
        }

        // favorite 데이터를 삭제한다
        await favorite.delete();

        // 게시물의 좋아요 수를 1 감소시킨다
        article.favoriteCount--;
        await article.save();

        res.end();

    }catch(error){
        next(error)
    }
}



// 피드 가져오기
exports.feed = async (req, res, next) => {
    try{
        const loginUser = req.user;

        // follow가 loginUser인 데이터를 찾는다
        const follows = await Follow.find({ follower: loginUser._id });
        const users = [...follows.map(follow => follow.following), loginUser._id];

        // 유저가 팔로우하는 유저, 유저 자신의 게시물
        const articles = await Article
            // 몽고스에서 사용하는 메서드를 articles 의 변수에 담음
            .find({ user: {$in: users} })    // $in 포함
            .sort([["created", "descending"]])
            .populate("user")
            .skip(req.query.skip)
            .limit(req.query.limit)
            .lean();

        // article 데이터에 isFavorite 속성을 추가한다
        for (let article of articles) {
            const favorite = await Favorite
                .findOne({ user: loginUser._id, article: article._id });

            article.isFavorite = !!favorite;
        }

        res.json(articles)

    } catch(error){
        next(error)
    }
}