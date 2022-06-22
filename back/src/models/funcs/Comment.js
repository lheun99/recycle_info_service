const db = require("../index.js");
const commentModel = db.comment;
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

const Comment = {
  create: async ({ newComment }) => {
    const createdNewComment = await commentModel.create(newComment);

    return createdNewComment;
  },
  findCommentByCommentId: async ({ comment_id }) => {
    const comment = await sequelize.query(
      `SELECT comments.comment_id, users.user_id, users.nickname, comments.content, comments."createdAt"
      FROM comments 
      INNER JOIN users
      	ON users.user_id=comments.user_id 
      INNER JOIN posts
      	ON posts.post_id=comments.post_id 
      WHERE comments.comment_id=$comment_id`,
      {
        bind: { comment_id: comment_id },
        type: QueryTypes.SELECT,
      }
    );
    return comment[0];
  },
  findCommentByPostId: async ({ post_id }) => {
    const comment = await sequelize.query(
      `SELECT comments.comment_id, users.user_id, users.nickname, comments.content, comments."createdAt"
      FROM comments 
      INNER JOIN users
      	ON users.user_id=comments.user_id 
      INNER JOIN posts
      	ON posts.post_id=comments.post_id 
      WHERE comments.post_id=$post_id
      ORDER BY comments."createdAt" desc`,
      {
        bind: { post_id: post_id },
        type: QueryTypes.SELECT,
      }
    );
    return comment[0];
  },

  update: async ({ comment_id, toUpdate }) => {
    const updatedComment = await commentModel.update(toUpdate, {
      where: { comment_id },
      returning: true,
      plain: true,
    });
    return updatedComment[1];
  },

  delete: async ({ comment_id }) => {
    const deletedComment = await commentModel.destroy({
      where: { comment_id },
    });
    return deletedComment;
  },
};

module.exports = Comment;
