const { Comment, FavoriteComment } = require("../models/model");


// 댓글 작성
exports.create = async (req, res, next) => {
    try{
        const loginUser = req.user;
        const id = req.params.id;
        // 댓글내용
        const content = req.body.content;

        // 데이터베이스 쿼리
        const comment = new Comment({
            article: id,
            content: content,
            user: loginUser._id
        })

        await comment.save();

        res.json(await comment.populate("user"));

    } catch(error){
        next(error)
    }
}