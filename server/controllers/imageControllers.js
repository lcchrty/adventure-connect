require("dotenv").config();

const { createErr } = require("../utils/errorCreator");
const Images = require("../models/imageModel");
const User = require("../models/userModel");
const { Storage } = require("@google-cloud/storage");
const { format } = require("util");
const multer = require("multer");
const path = require("path");

const nodemailer = require("nodemailer");

/*

[0] [Error: ENOENT: no such file or directory, open '/Users/chandler/Desktop/codesmith/iteration/adventure-connect/server/web-app-adventure-connect-39d349a3f0d5.json'] 

*/

const cloudStorage = new Storage({
  keyFilename: path.join(__dirname, "../campfire-connect-f14e32ca020a.json"),
  projectId: "campfire-connect",
});
const bucketName = process.env.GCLOUD_STORAGE_BUCKET;
const bucket = cloudStorage.bucket(bucketName);

const imageController = {};

imageController.uploadImages = async (req, res, next) => {
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
    },
    onError: function (err, next) {
      console.log("error", err);
      next(err);
    },
  }).array("image");

  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Error uploading Files" });
    }
    const user_id = req.params.user_id;
    console.log(req.file);
    if (!req.files) {
      res.status(400).send("No file uploaded.");
      return;
    }
    try {
      req.files.forEach((file) => {
        const blob = bucket.file(file.originalname);
        const blobStream = blob.createWriteStream();
        blobStream.on("error", (err) => {
          // next(err);
          console.log(err);
        });
        blobStream.on("finish", async () => {
          // The public URL can be used to directly access the file via HTTP.
          const publicUrl = format(
            `https://storage.googleapis.com/${bucket.name}/${blob.name}`
          );
          console.log("publicUrl: ", publicUrl);
          const { user_id } = req.body;
          const imageUrls = await User.findOneAndUpdate(
            { user_id },
            {
              $push: { images: publicUrl },
            },
            { new: true }
          );
          // res.locals.updatedUser = updatedUser;
          // console.log("imageUrls: ", imageUrls);
          res.locals.images = imageUrls;
        });
        // urls.push(publicUrl);
        blobStream.end(file.buffer);
      });
      return next();
    } catch (err) {
      return next(err);
    }
  });
};

imageController.getImages = async (req, res, next) => {
  console.log("req.params: ", req.params);
  const user_id = req.params.user_id;
  try {
    const image = await Users.find({ user_id: user_id });
    // console.log('image',image[0].image);
    res.locals.images = image;
    return next();
  } catch (err) {
    console.log(err);
    // res.status(500).json(err);
  }
};

module.exports = imageController;
