const Comment = require("../models/funcs/Comment");

const commentService = {
  createComment: async ({ newComment }) => {
    const { comment_id, post_id, user_id, content, createdAt } =
      await Comment.create({
        newComment,
      });

    const createdComment = {
      commentId: comment_id,
      postId: post_id,
      userId: user_id,
      content,
      createdAt,
    };
    return { message: "success", data: createdComment };
  },

  getCommentByPostId: async ({ postId }) => {
    const listedComment = await Comment.findCommentByPostId({
      post_id: postId,
    });

    if (listedComment.length === 0) {
      const errorMessage =
        "게시글 존재하지 않습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const searchedCommentByPostId = listedComment.map((comment) => ({
      commentId: comment.comment_id,
      userId: comment.user_id,
      nickname: comment.nickname,
      content: comment.content,
      createdAt: comment.createdAt,
    }));
    return { message: "success", data: searchedCommentByPostId };
  },

  setComment: async ({ commentId, toUpdate }) => {
    const findedComment = await Comment.findCommentByCommentId({
      comment_id: commentId,
    });
    if (findedComment.length === 0) {
      const errorMessage =
        "게시글이 존재하지 않습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const toUpdateField = Object.keys(toUpdate);
    toUpdateField.forEach((key) => {
      if (!toUpdate[key]) delete toUpdate[key];
    });

    const { content, createdAt, updatedAt } = await Comment.update({
      comment_id: commentId,
      toUpdate,
    });

    const updatedComment = {
      content,
      createdAt,
      updatedAt,
    };
    return { message: "success", data: updatedComment };
  },

  deleteComment: async ({ commentId }) => {
    const deletedComment = await Comment.delete({
      comment_id: commentId,
    });

    if (!deletedComment) {
      const errorMessage =
        "게시글 존재하지 않습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return { message: "success", data: "삭제가 완료되었습니다." };
  },
};

module.exports = commentService;
