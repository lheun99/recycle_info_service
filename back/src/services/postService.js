const Post = require("../models/funcs/Post");

const postService = {
  createPost: async ({ newPost }) => {
    console.log(newPost);
    const { post_id, user_id, title, content, createdAt, post_img } =
      await Post.create({ newPost });

    const createdPost = {
      postId: post_id,
      userId: user_id,
      title,
      content,
      createdAt,
      postImg: post_img,
    };
    return { message: "success", data: createdPost };
  },

  getAllPost: async () => {
    const listedPost = await Post.findAllPost();
    if (!listedPost) {
      const errorMessage = "게시글 존재하지 않습니다.";
      return { errorMessage };
    }

    const postLists = [];
    listedPost.map((post) =>
      postLists.push({
        postId: post.post_id,
        title: post.title,
        nickname: post.nickname,
        createdAt: post.createdAt,
        postImg: post.post_img,
      })
    );

    return { message: "success", data: postLists };
  },
  getAllPostPaged: async ({ page, perPage }) => {
    const totalPage = await Post.findAllPostTotalPage({ perPage });
    const listedPost = await Post.findAllPostPaged({ page, perPage });

    if (!listedPost) {
      const errorMessage = "게시글 존재하지 않습니다.";
      return { errorMessage };
    }

    const postLists = [];
    listedPost.map((post) =>
      postLists.push({
        postId: post.post_id,
        title: post.title,
        content: post.content,
        nickname: post.nickname,
        createdAt: post.createdAt,
        postImg: post.post_img,
      })
    );

    return { message: "success", data: { totalPage, postLists } };
  },

  getPostById: async ({ userId }) => {
    const currentPost = await Post.findPostByUserId({ user_id: userId });

    if (!currentPost) {
      const errorMessage =
        "게시글 존재하지 않습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const searchedPost = {
      postId: currentPost.post_id,
      userId: currentPost.user_id,
      title: currentPost.title,
      nickname: currentPost.nickname,
      createdAt: currentPost.createdAt,
      content: currentPost.content,
      postImg: currentPost.post_img,
    };
    return { message: "success", data: searchedPost };
  },
  getPostByPostId: async ({ post_id }) => {
    const currentPost = await Post.findPostById({ post_id });

    if (!currentPost) {
      const errorMessage =
        "게시글 존재하지 않습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    const searchedPost = {
      postId: currentPost.post_id,
      userId: currentPost.user_id,
      title: currentPost.title,
      nickname: currentPost.nickname,
      createdAt: currentPost.createdAt,
      content: currentPost.content,
      postImg: currentPost.post_img,
    };
    return { message: "success", data: searchedPost };
  },

  setPost: async ({ post_id, toUpdate }) => {
    const findedPost = await Post.findPostById({ post_id });
    if (!findedPost) {
      const errorMessage =
        "게시글이 존재하지 않습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const toUpdateField = Object.keys(toUpdate);
    toUpdateField.forEach((key) => {
      if (!toUpdate[key]) delete toUpdate[key];
    });

    const { title, content, createdAt, updatedAt, post_img } =
      await Post.update({
        post_id,
        toUpdate,
      });

    const updatedPost = {
      title,
      content,
      createdAt,
      updatedAt,
      postImg: post_img,
    };
    return { message: "success", data: updatedPost };
  },

  deletePost: async ({ post_id }) => {
    const deletedPost = await Post.delete({
      post_id,
    });

    if (!deletedPost) {
      const errorMessage =
        "게시글 존재하지 않습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return { message: "success", data: "삭제가 완료되었습니다." };
  },
};

module.exports = postService;
