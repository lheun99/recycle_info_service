const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "users",
        {
            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            nickname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            picture: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue:
                    "https://images.unsplash.com/photo-1556713304-e5ac0f02e516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            },
            last_login: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: "users",
            schema: "public",
            timestamps: true,
        }
    );
};
