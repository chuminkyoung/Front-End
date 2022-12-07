const { User } = require("../models/model");

// 유저 검색
exports.username = async (req, res, next) => {
    try{
        // req.query
        // url에 ?key=value의 형태로 담는다
        const username = req.query.username;
        // username으로 '시작'하는 패턴
        const patt = new RegExp("^" + username);

        // console.log(patt)   // 패턴 출력해보기

        // 쿼리
        const users = await User.find({
            username: {$regex: patt}
        })

        res.json(users);

    }catch(error){
        next(error)
    }
}