var DataTypes = require("sequelize").DataTypes;
var _points = require("./points");
var _quizs = require("./quizs");
var _users = require("./users");

function initModels(sequelize) {
  var points = _points(sequelize, DataTypes);
  var quizs = _quizs(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    points,
    quizs,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
