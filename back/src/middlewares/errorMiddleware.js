const logger = require("../config/logger");

const errorMiddleware = (error, req, res, next) => {
    // 터미널에 노란색으로 출력됨.
    console.log("\x1b[33m%s\x1b[0m", error);
    logger.error(error);
    res.status(400).json({ message: "fail", data: error.message });
};

module.exports = errorMiddleware;
