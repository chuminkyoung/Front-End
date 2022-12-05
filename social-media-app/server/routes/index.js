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


// # AUTH
// /user 요청 했을 때 auth_controller를 실행 하기 전 auth를 인증 받기 -> 인증 받지 못하면 401 에러
// 즉 로그인을 해야 페이지 요청 받을 수 있음
router.get('/user', auth, auth_controller.user);


// # ACCOUNTS (계정)
// 로그인, 회원가입, 프로필 계정 등등..
router.post('/accounts/login', account_controller.login);
router.post('/accounts/register', account_controller.register);
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


// # COMMENTS (댓글)
router.post('/articles/:id/comments', auth, comment_controller.create);         // 댓글 작성


module.exports = router;