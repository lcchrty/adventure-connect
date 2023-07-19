const mongoose = require("mongoose");

// Users
const usersSchema = new mongoose.Schema({
  name: { type: String }, //why not required
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  zipCode: { type: Number, required: true },
  interests: { type: Array },
  bio: { type: String },
  liked: { type: Array }, // want to feature folks that a user likes at the top of the dashboard/home page/etc.
  likedBy: { type: Array }, // adding placeholder for people who like this profile
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
