const User = require("../models/funcs/User");

const userService = {
    addUser: async ({ nickname, email, password }) => {
        const newUser = { nickname, email, password };
        console.log(newUser);
        const createdNewUser = await User.create({ newUser });
        return createdNewUser;
    },

    getUser: async ({ id }) => {
        const user = await User.findById({ id });
        return user;
    },
};

module.exports = userService;
