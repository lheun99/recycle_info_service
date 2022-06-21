const winston = require("winston");
require("winston-daily-rotate-file");
const logDir = `${__dirname}/log`;

const levels = { error: 0, warn: 1, info: 2, http: 3, debug: 4 };

const level = () => {
    const env = process.env.NODE_ENV || "development";
    const isDevelopment = env === "development";
    return isDevelopment ? "debug" : "warn";
};
