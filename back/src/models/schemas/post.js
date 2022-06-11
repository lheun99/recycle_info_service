module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define(
    "post",
    {
      post_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      post_img: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  return Post;
};
