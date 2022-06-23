import cors from "cors";
import express from "express";
import db from "./models/index.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import recycleInfoRouter from "./routes/recycleInfoRouter";
import userRouter from "./routes/userRouter";
import postRouter from "./routes/postRouter";
import commentRouter from "./routes/commentRouter";
import searchRouter from "./routes/searchRouter";
import imgUploadRouter from "./routes/imgUploadRouter";
import pointRouter from "./routes/pointRouter";
import quizRouter from "./routes/quizRouter";
import authRouter from "./routes/authRouter";

const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("데이터베이스가 성공적으로 연결되었습니다.");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello, world!!!");
});

app.use("/recycle-info", recycleInfoRouter);
app.use("/search", searchRouter);
app.use("/upload", imgUploadRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
app.use("/users", userRouter);
app.use("/points", pointRouter);
app.use("/quizs", quizRouter);
app.use("/auth", authRouter);
app.use(errorMiddleware);

export default app;
