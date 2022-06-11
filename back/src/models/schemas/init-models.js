const DataTypes = require("sequelize").DataTypes;
const _points = require("./points");
const _quizs = require("./quizs");
const _users = require("./users");

const initModels = (sequelize) => {
    const points = _points(sequelize, DataTypes);
    const quizs = _quizs(sequelize, DataTypes);
    const users = _users(sequelize, DataTypes);

    return {
        points,
        quizs,
        users,
    };
};

module.exports = initModels;
