const cors = require("cors");
const express = require("express");
const db = require("./models/index.js");
const errorMiddleware = require("./middlewares/errorMiddleware.js");
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const imgUploadRouter = require("./routes/imgUploadRouter");

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
app.use("/post", postRouter);
app.use("/upload", imgUploadRouter);
app.use("/users", userRouter);
app.use(errorMiddleware);

module.exports = app;
