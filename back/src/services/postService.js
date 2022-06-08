const db = require("../models");
const Post = db.post;
const Op = db.Sequelize.Op;

//post create 생성
exports.createPost = (req, res, next) => {
  Post.create(req.body, {
    fields: ["title", "content"],
  })
    .then((response) => {
      res.json({
        message: "success",
        data: response,
      });
    })
    .catch((error) => {
      console.log(error);
      const err = new Error(error);
      next(err);
    });
};

//post update 수정
exports.updatePost = (req, res, next) => {
  Post.update(
    {
      title: req.body.title,
      content: req.body.content,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((response) => {
      res.json({
        message: "success",
        count: response[0], //영향을 받은 행 수
      });
    })
    .catch((error) => {
      console.log(error);
      const err = new Error(error);
      next(err);
    });
};

//post delete 삭제
exports.deletePost = (req, res, next) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((response) => {
      res.json({
        message: "success",
        count: response, //영향을 받은 행 수
      });
    })
    .catch((error) => {
      console.log(error);
      const err = new Error(error);
      next(err);
    });
};

// post 한 개 불러오기
exports.getPost = (req, res, next) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((response) => {
      res.json({
        message: "success",
        data: response,
      });
    })
    .catch((error) => {
      console.log(error);
      const err = new Error(error);
      next(err);
    });
};

exports.getPostAll = (req, res, next) => {
  Post.findAll({
    order: [["createdAt"]],
  })
    .then((response) => {
      res.json({
        message: "success",
        data_list: response,
      });
    })
    .catch((error) => {
      console.log(error);
      const err = new Error(error);
      next(err);
    });
};
