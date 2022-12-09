# 컴포넌트
- 유저인증
AuthContext.js
AuthProvider.js (user state 관리)
AuthRequired.js

- 계정
Login.js    (로그인)
Register.js (회원가입)
Accounts.js (정보수정)

- 게시물
ArticleCreate.js    (게시물 작성)
ArticleList.js      (게시물 전체보기)
ArticleView.js      (게시물 한개 보기)
Feed.js             (피드 - 팔로우한 게시물 출력)

- 댓글
Comments.js

- 검색
Search.js

- 프로필
Profile.js
FollowersList.js    (팔로워 리스트)
FollowingList.js    (팔로잉 리스트)

- 404 페이지
NotFound.js

- 기타 (합성용 컴포넌트)
Layout.js           (레이아웃 - 네비, 헤더, 푸터)
Avatar.js           (유저 아바타 - 사진, 정보)
ArticleTemplate.js  (게시물 템플릿 - 사진, 댓글, 좋아요)
Carousel.js         (캐러셀 - 버튼 클릭 시 넘어가는 이미지)
Modal.js            (모달)

# 유틸리티 함수
- 데이터 가져오기
fetchData.js