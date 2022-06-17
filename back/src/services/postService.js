const Post = require("../models/funcs/Post");

const postService = {
  createPost: async ({ userId, title, post_img, content }) => {
    const newPost = { user_id: userId, title, post_img, content };
    // const createdNewPost = await Post.create({ newPost });
    const createdNewPost = {
      post_id: "21",
      user_id: "6da56e43-f9b1-4e19-9e4a-58257b189c06",
      title: "post를 test합니다.",
      content: "post test를 위해 post를 작성합니다.",
      updatedAt: "2022-06-15T16:02:27.239Z",
      createdAt: "2022-06-15T16:02:27.239Z",
      post_img: null,
    };
    return { message: "success", data: createdNewPost };
  },

  getAllPost: async () => {
    //const listedPost = await Post.findAllPost();
    const listedPost = [
      {
        title: "post를 수정하는 기능을 test합니다.",
        createdAt: "2022-06-14T13:14:05.516Z",
        nickname: "test",
        post_img: null,
      },
      {
        title: "post를 test합니다.",
        createdAt: "2022-06-14T13:20:33.441Z",
        nickname: "test2",
        post_img: null,
      },
      {
        title: "post를 test합니다.",
        createdAt: "2022-06-14T13:21:57.641Z",
        nickname: "test2",
        post_img: null,
      },
      {
        title: "post를 test합니다.",
        createdAt: "2022-06-14T13:33:06.573Z",
        nickname: "test2",
        post_img: null,
      },
      {
        title: "post를 test합니다.",
        createdAt: "2022-06-14T13:35:45.420Z",
        nickname: "test",
        post_img: null,
      },
      {
        title: "post를 test합니다.",
        createdAt: "2022-06-14T13:35:46.351Z",
        nickname: "test",
        post_img: null,
      },
      {
        title: "post를 test합니다.",
        createdAt: "2022-06-14T13:35:47.104Z",
        nickname: "test",
        post_img: null,
      },
      {
        title: "post를 test합니다.",
        createdAt: "2022-06-14T13:35:47.612Z",
        nickname: "test",
        post_img: null,
      },
      {
        title: "post를 test합니다.",
        createdAt: "2022-06-14T13:35:48.140Z",
        nickname: "test",
        post_img: null,
      },
      {
        title: "post를 test합니다.",
        createdAt: "2022-06-15T15:01:12.393Z",
        nickname: "lheun",
        post_img: null,
      },
      {
        title: "post를 test합니다.",
        createdAt: "2022-06-15T15:25:01.316Z",
        nickname: "lheun",
        post_img: null,
      },
      {
        title: "post를 수정하는 기능을 test합니다.",
        createdAt: "2022-06-15T15:30:54.246Z",
        nickname: "lheun",
        post_img: null,
      },
      {
        title: "post를 수정하는 기능을 test합니다.",
        createdAt: "2022-06-15T15:59:37.313Z",
        nickname: "lheun",
        post_img: null,
      },
      {
        title: "post를 test합니다.",
        createdAt: "2022-06-15T16:02:27.239Z",
        nickname: "lheun",
        post_img: null,
      },
    ];
    if (!listedPost) {
      const errorMessage = "게시글 존재하지 않습니다.";
      return { errorMessage };
    }

    return { message: "success", data: listedPost };
  },

  getPostById: async ({ userId }) => {
    //const currentPost = await Post.findPostByUserId({ user_id: userId });
    const currentPost = [
      {
        post_id: "14",
        title: "post를 test합니다.",
        post_img: null,
        content: "post test를 위해 post를 작성합니다.",
        user_id: "6da56e43-f9b1-4e19-9e4a-58257b189c06",
        createdAt: "2022-06-15T15:01:12.393Z",
        updatedAt: "2022-06-15T15:01:12.393Z",
      },
      {
        post_id: "15",
        title: "post를 test합니다.",
        post_img: null,
        content: "post test를 위해 post를 작성합니다.",
        user_id: "6da56e43-f9b1-4e19-9e4a-58257b189c06",
        createdAt: "2022-06-15T15:25:01.316Z",
        updatedAt: "2022-06-15T15:25:01.316Z",
      },
      {
        post_id: "16",
        title: "post를 수정하는 기능을 test합니다.",
        post_img: null,
        content: "post test를 위해 첫번째 post를 수정합니다.",
        user_id: "6da56e43-f9b1-4e19-9e4a-58257b189c06",
        createdAt: "2022-06-15T15:30:54.246Z",
        updatedAt: "2022-06-15T15:42:51.109Z",
      },
      {
        post_id: "19",
        title: "post를 수정하는 기능을 test합니다.",
        post_img: null,
        content: "post test를 위해 첫번째 post를 수정합니다.",
        user_id: "6da56e43-f9b1-4e19-9e4a-58257b189c06",
        createdAt: "2022-06-15T15:59:37.313Z",
        updatedAt: "2022-06-15T16:01:51.163Z",
      },
      {
        post_id: "21",
        title: "post를 test합니다.",
        post_img: null,
        content: "post test를 위해 post를 작성합니다.",
        user_id: "6da56e43-f9b1-4e19-9e4a-58257b189c06",
        createdAt: "2022-06-15T16:02:27.239Z",
        updatedAt: "2022-06-15T16:02:27.239Z",
      },
    ];
    if (!currentPost) {
      const errorMessage =
        "게시글 존재하지 않습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return { message: "success", data: currentPost };
  },
  getPost: async ({ post_id }) => {
    //const currentPost = await Post.findPostById({ post_id });
    const currentPost = {
      post_id: "19",
      title: "post를 수정하는 기능을 test합니다.",
      post_img: null,
      content: "post test를 위해 첫번째 post를 수정합니다.",
      user_id: "6da56e43-f9b1-4e19-9e4a-58257b189c06",
      createdAt: "2022-06-15T15:59:37.313Z",
      updatedAt: "2022-06-15T16:01:51.163Z",
    };
    if (!currentPost) {
      const errorMessage =
        "게시글 존재하지 않습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return { message: "success", data: currentPost };
  },

  setPost: async ({ post_id, toUpdate }) => {
    //const findedPost = await Post.findPostById({ post_id });
    const findedPost = {
      post_id: "19",
      title: "post를 수정하는 기능을 test합니다.",
      post_img: null,
      content: "post test를 위해 첫번째 post를 수정합니다.",
      user_id: "6da56e43-f9b1-4e19-9e4a-58257b189c06",
      createdAt: "2022-06-15T15:59:37.313Z",
      updatedAt: "2022-06-15T16:01:51.163Z",
    };
    if (!findedPost) {
      const errorMessage =
        "게시글 존재하지 않습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const toUpdateField = Object.keys(toUpdate);
    toUpdateField.forEach((key) => {
      if (!toUpdate[key]) delete toUpdate[key];
    });

    const updatedPost = await Post.update({ post_id, toUpdate });

    return { message: "success", data: updatedPost[1] };
  },

  deletePost: async ({ post_id }) => {
    // const deletedPost = await Post.delete({
    //   post_id,
    // });
    const deletedPost = 1;
    if (!deletedPost) {
      const errorMessage =
        "게시글 존재하지 않습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return { message: "success", data: deletedPost };
  },
};

module.exports = postService;
