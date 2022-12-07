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


// 댓글 list
exports.comment_list = async (req, res, next) => {
    try{
        const loginUser = req.user;
        const id = req.params.id;

        // 데이터베이스 쿼리
        const comments = await Comment
            .find({article: id})
            .populate("user")
            .sort([["created", "descending"]])  // 정렬 내림차순
            .limit(req.query.limit)
            .skip(req.query.skip)
            .lean();

        // comment 데이터에 isFavorite 속성을 추가한다
        for(let comment of comments){
            const favoriteComment = await FavoriteComment
                .findOne({ user: loginUser._id, comment: comment._id });

            comment.isFavorite = favoriteComment ? true : false;
        }

        // 서버의 응답
        res.json(comments);

    }catch (error){
        next(error)
    }
}


// 댓글 삭제
exports.delete = async (req, res, next) => {
    try{
        const loginUser = req.user;
        const id = req.params.id;

        // 데이터베이스 쿼리
        const comment = await Comment.findById(id);

        // 삭제를 요청한 유저와 댓글 작성자가 일치하지 않을 경우
        // toString() 사용할 경우 문자열로 비교
        if(loginUser._id.toString() !== comment.user.toString()){
            const err = new Error("User not match")
            err.status = 400;
            return next(err);
        }

        // 데이터베이스 쿼리
        await comment.delete();

        res.end();

    }catch(error){
        next(error)
    }
}


// 댓글 좋아요
exports.favorite = async (req, res, next) => {
    try{
        const loginUser = req.user;
        const id = req.params.id;

        // 데이터베이스 쿼리
        const comment = await Comment.findById(id);
        const favoriteComment = await FavoriteComment
        .findOne({ user: loginUser._id, comment: comment._id });

        // 이미 좋아요를 누른 게시물일 때
        if(favoriteComment){
            const err = new Error("Already favorite comment");
            err.status = 400
            return next(err)
        }

        // 새로운 favoriteComment 데이터를 저장한ㄷ나
        const newFavoriteComment = new FavoriteComment({
            user: loginUser._id,
            comment: comment._id
        })
        await newFavoriteComment.save();

        // 댓글의 좋아요 수를 1 증가시킨다
        comment.favoriteCount++;
        await comment.save();

        res.end();

    }catch(error){
        next(error)
    }
}


// 댓글 좋아요 취소
exports.unfavorite = async (req, res, next) => {
    try{
        const loginUser = req.user;
        const id = req.params.id;

        // 데이터베이스 쿼리
        const comment = await Comment.findById(id)
        const favoriteComment = await FavoriteComment
            .findOne({ user: loginUser._id, comment: comment._id });

        // 좋아요를 누른 게시물이 아닌 경우
        if (!favoriteComment) {
            const err = new Error("No comment to unfavorite");
            err.status = 400;
            return next(err)
        }

        // favoriteComment 데이터를 삭제한다
        await favoriteComment.delete();

        // 댓글의 좋아요 수를 1 감소시킨다
        comment.favoriteCount--;
        await comment.save();

        res.end();

    }catch(error){
        next(error)
    }
}