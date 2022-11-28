// Auth(Authorization, 인증)

// JWT (json web token)
// json포맷 토큰
// 로그인에 성공할 경우 서버가 발급한다
// 유저는 매 요청시에 서버에 토큰을 함께 전송한다
// passport 라이브러리를 사용

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// User model
const { User } = require('../models/model');
const passport = require('passport');
const { Passport } = require('passport');
const opts = {};
require('dotenv').config();

// HTTP 요청 헤더의 'Authorization' 속성으로부터 JWT를 추출한다
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// 토큰을 암호화하기 위해 secret key가 필요하다
// 환경변수(process.env)에서 secret key를 가져온다
opts.secretOrKey = process.env.SECRET;

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    // JWT으로부터 user를 db에서 검색한다 
    // jwt_payload에 있는 username을 찾아오기
    User.findOne({ username: jwt_payload.username }, function (err, user) {
        if(err){ // 에러처리
            return done(err, false);
        }

        if(user){   // 유저가 존재하는 경우, req.user(유저 접근) 변수에 유저데이터를 할당한다
            return done(null, user);
        }else{      // 유저가 존재하지 않는 경우, 서버는 401(Unauthorized) 에러를 전송한다
            return done(null, false);
        }
    });
}));