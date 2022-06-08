const User = require("../models/funcs/User");

const userService = {
    addUser: async ({ nickname, email, password }) => {
        const newUser = { nickname, email, password };
        console.log(newUser);
        const createdNewUser = await User.create({ newUser });
        return createdNewUser;
    },
};

module.exports = userService;
