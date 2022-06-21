const commentRouter = require("express").Router();
const commentService = require("../services/commentService");
const loginRequired = require("../middlewares/loginRequired");

commentRouter.use(loginRequired);

//댓글 추가
commentRouter.post("/", async (req, res, next) => {
  try {
    //게시글 작성자 정보
    const userId = req.currentUserId;
    //게시글 관련 정보
    const { postId, content } = req.body;

    //추가할 게시글
    const newComment = {
      user_id: userId,
      post_id: postId,
      content,
    };

    //추가할 게시글
    const createdComment = await commentService.createComment({
      newComment,
    });

    res.status(201).json(createdComment);
  } catch (error) {
    next(error);
  }
});

//특정 게시글 찾기
commentRouter.get("/:id", async (req, res, next) => {
  try {
    //특정 게시글 id
    const postId = req.params.id;

    const listedPost = await commentService.getCommentByPostId({ postId });
    res.status(201).json(listedPost);
  } catch (error) {
    next(error);
  }
});

//특정 게시글 수정
commentRouter.put("/:id", async (req, res, next) => {
  try {
    //특정 게시글 id
    const commentId = req.params.id;
    const { content } = req.body;

    //수정할 게시글 정보
    const toUpdate = { content };

    //수정된 게시글
    const updatedComment = await commentService.setComment({
      commentId,
      toUpdate,
    });

    res.status(201).json(updatedComment);
  } catch (error) {
    next(error);
  }
});

//특정 게시글 삭제
commentRouter.delete("/:id", async (req, res, next) => {
  try {
    //특정 게시글 id
    const commentId = req.params.id;

    //삭제된 게시글
    const deletedComment = await commentService.deleteComment({
      commentId,
    });

    if (deletedComment.errorMessage) {
      throw new Error(deletedComment.errorMessage);
    }

    res.status(201).json(deletedComment);
  } catch (error) {
    next(error);
  }
});

module.exports = commentRouter;
