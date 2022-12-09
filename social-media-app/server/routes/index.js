const express = require('express')
const router = express.Router();
const passport = require("passport");
const auth = passport.authenticate("jwt", { session: false });
require("../auth/passportJwt");

// # HTTP 요청 메서드
// GET: read data       // 읽을때
// POST: create data    // 만들때
// PUT: update data     // 업데이트
// DELETE: delete data  // 삭제

// router.HttpRequestMethod(endPoint, controller)
router.get('/', (req, res) => {
    res.json({ message: "hello express" })
})

const auth_controller = require('../controllers/auth_controller');
const account_controller = require('../controllers/account_controller');
const article_controller = require('../controllers/article_controller');
const comment_controller = require('../controllers/comment_controller');
const search_controller = require('../controllers/search_controller');
const profile_controller = require('../controllers/profile_controller');



// # AUTH
// /user 요청 했을 때 auth_controller를 실행 하기 전 auth를 인증 받기 -> 인증 받지 못하면 401 에러
// 즉 로그인을 해야 페이지 요청 받을 수 있음
router.get('/user', auth, auth_controller.user);



// # ACCOUNTS (계정)
// 로그인, 회원가입, 프로필 계정 등등..
router.post('/accounts/login', account_controller.login);           // 로그인 후 토큰 발급
router.post('/accounts/register', account_controller.register);     // 회원가입 // username, email, password
router.post('/accounts/edit', auth, account_controller.edit);
router.post('/accounts/edit/image', auth, account_controller.upload_image);
router.delete('/accounts/edit/image', auth, account_controller.delete_image);



// # ARTICLES (게시물)
router.post('/articles', auth, article_controller.create);                      // 게시물 등록
router.get('/articles', auth, article_controller.article_list);                 // 전체 게시물 가져오기
router.get('/articles/:id', auth, article_controller.article);                  // 게시물 하나 등록
router.delete('/articles/:id', auth, article_controller.delete);                // 게시물 삭제
router.post('/articles/:id/favorite', auth, article_controller.favorite);       // 좋아요
router.delete('/articles/:id/favorite', auth, article_controller.unfavorite);   // 좋아요 취소
router.get('/feed', auth, article_controller.feed);                             // 피드



// # COMMENTS (댓글) ex( _id: )
router.post('/articles/:id/comments', auth, comment_controller.create);         // 댓글 작성

// id 는 게시글 아이디 (article: )
router.get('/articles/:id/comments', auth, comment_controller.comment_list);    // 댓글 list

// 댓글의 아이디 ex( _id: )
router.delete('/comments/:id', auth, comment_controller.delete);                // 댓글 삭제
router.post('/comments/:id/favorite', auth, comment_controller.favorite);       // 댓글 좋아요
router.delete('/comments/:id/favorite', auth, comment_controller.unfavorite);   // 댓글 좋아요 취소



// # SEARCH (검색)
// localhost:3000/search?username=u -> username=username
router.get('/search', auth, search_controller.username);        // 유저 이름으로 검색



// # PROFILE (프로필)
// localhost:3000/profiles/user01
router.get('/profiles/:username', auth, profile_controller.profile);                    // 프로필
router.get('/profiles/:username/articles', auth, profile_controller.timeline);          // 프로필 유저의 게시물
router.post('/profiles/:username/follow', auth, profile_controller.follow);             // 팔로우
router.delete('/profiles/:username/follow', auth, profile_controller.unfollow);         // 언팔
router.get('/profiles/:username/followers', auth, profile_controller.follower_list);    // 팔로워 리스트
router.get('/profiles/:username/following', auth, profile_controller.following_list);   // 팔로잉 리스트


module.exports = router;