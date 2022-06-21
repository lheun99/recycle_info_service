const imgUploadRouter = require("express").Router();
const {
  uploadPostImage,
  uploadProfileImage,
} = require("../middlewares/imgUploader.js");

imgUploadRouter.post(
  "/post-img",
  uploadPostImage.array("image"),
  async (req, res, next) => {
    try {
      const files = req.files;
      const imgUrl = files.map((file) => file.location);

      const result = { message: "success", data: imgUrl };
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

imgUploadRouter.post(
  "/profile-img",
  uploadProfileImage.single("image"),
  async (req, res, next) => {
    try {
      const imgUrl = req.file.location;

      const result = { message: "success", data: imgUrl };
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = imgUploadRouter;
