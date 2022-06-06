const PostService = require("../services/postService.js");
const postRouter = require("express").Router();

//post 생성
postRouter.post("/post", PostService.createPost);
//post 수정
postRouter.put("/post/:id", PostService.updatePost);
//post 삭제
postRouter.delete("/post/:id", PostService.deletePost);
//특정 post 불러오기
postRouter.get("/post/:id", PostService.getPost);
//전체 postlist 불러오기
postRouter.get("/postlist", PostService.getPostAll);

module.exports = postRouter;
