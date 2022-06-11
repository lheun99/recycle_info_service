const db = require("../index.js");
const postModel = db.post;
const Sequelize = db.Sequelize;

const Post = {
  create: async ({ newPost }) => {
    const createdNewPost = await userModel.create(newPost, {
      fields: ["title", "post_img", "content"],
    });

    return createdNewPost;
  },
};

module.exports = Post;
