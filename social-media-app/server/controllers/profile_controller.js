const { User, Follow, Article } = require("../models/model");

// 유저 프로필 정보
exports.profile = async (req, res, next) => {
    try{
        const loginUser = req.user;
        const username = req.params.username;
        const user = await User.findOne({ username });

        // 유저가 존재하지 않을 경우
        if(!user) {
            const err = new Error("User not found");
            err.status = 404;
            return next(err);
        }

        // 로그인 유저가 팔로우 하는 유저인지 판단한다
        const follow = await Follow.findOne({ follower: loginUser._id, following: user._id })

        // 프로필 유저의 팔로잉 수
        const followingCount = await Follow.countDocuments({ follower: user._id })
        // 프로필 유저의 팔로워 수
        const followersCount = await Follow.countDocuments({ following: user._id })
        // 프로필 유저의 게시물 수
        const articlesCount = await Article.countDocuments({ user: user._id })

        const profile = {
            username: user.username,
            bio: user.bio,              // 자기소개
            image: user.image,
            isFollowing: !!follow,
            followersCount,
            followingCount,
            articlesCount
        }
        
        res.json(profile);

    }catch(error){
        next(error)
    }
}


// 프로필 유저의 게시물
exports.timeline = async (req, res, next) => {
    try{
        const username = req.params.username;
        const user = await User.findOne({ username });

        // 프로필 유저가 존재하지 않는 경우
        if(!user){
            const err = new Error("User not found")
            err.status = 404;
            return next(err);
        }

        // 데이터베이스 쿼리
        const articles = await Article.find({ user: user._id })
            .sort([["created", "descending"]])
            .populate("user")
            .skip(req.query.skip)
            .limit(req.query.limit);

        res.json(articles);

    }catch(error){
        next(error)
    }
}