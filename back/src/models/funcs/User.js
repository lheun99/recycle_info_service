const db = require("../index.js");
const userModel = db.user;

const User = {
    create: () => {
        console.log("say hello!");
    },
};

module.exports = User;
