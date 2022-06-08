module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        nickname: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.TEXT,
        },
        totalPoint: {
            type: Sequelize.BIGINT,
            defaultValue: 0,
        },
        picture: {
            type: Sequelize.STRING,
            defaultValue:
                "https://images.unsplash.com/photo-1556713304-e5ac0f02e516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
    });

    return User;
};
