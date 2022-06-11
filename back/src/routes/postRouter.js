const postRouter = require("express").Router();
const postService = require("../services/postService");

// //post 생성
// postRouter.post("/post", PostService.createPost);
// //post 수정
// postRouter.put("/post/:id", PostService.updatePost);
// //post 삭제
// postRouter.delete("/post/:id", PostService.deletePost);
// //특정 post 불러오기
// postRouter.get("/post/:id", PostService.getPost);
// //전체 postlist 불러오기
// postRouter.get("/postlist", PostService.getPostAll);

postRouter.post("/", async (req, res, next) => {
  try {
    //게시글 관련 정보
    const { title, post_img, content } = req.body;

    const newPost = await postService.createPost({
      title,
      post_img,
      content,
    });

    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
});

module.exports = postRouter;
