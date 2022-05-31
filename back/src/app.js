import path from "path"; // 파일 경로 모듈

import dotenv from "dotenv";
const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, "../.env") });

import cors from "cors";
import express from "express";
// import morgan from "morgan";
// import redis from "redis";
// import sriracha from "sriracha";
// import { logger } from "./utils/winstonLogger.js";

import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import "../src/loaders/index.js";

const app = express();

app.use(cors());
app.use(express.json());
// app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: false }));
// app.use("/admin", sriracha());

// if (process.env.NODE_ENV === "production") {
//   app.use(
//     morgan(":method :status :url :response-time ms", {
//       stream: logger.stream,
//       skip: function (req, res) {
//         return res.statusCode <= 400;
//       },
//     })
//   );
// } else {
//   app.use(
//     morgan(":method :status :url :response-time ms", {
//       stream: logger.stream,
//     })
//   );
// }

/* Common routes */

app.use(errorMiddleware);

export { app };
