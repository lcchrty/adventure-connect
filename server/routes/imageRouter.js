const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageControllers");
const Images = require("../models/imageModel");
const bcrypt = require("bcrypt");

router.get("/getImages", imageController.getImages, async (req, res) => {
  // console.log("req.params; ", req.params);
  res.status(200).json([[res.locals.images]]);
});

router.post(
  "/upload-file-to-cloud-storage/:user_id",
  imageController.uploadImages,
  async (req, res, next) => {
    res.status(200).send([res.locals.images]);
  }
);

module.exports = router;
