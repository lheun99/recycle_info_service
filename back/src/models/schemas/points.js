const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('points', {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    point: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    route: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'points',
    schema: 'public',
    timestamps: true
  });
};
