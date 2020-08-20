const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  screenName: String,
  twitterId: String,
  profileImageUrl: String,
  created_at: String,
  id: String, 
  text: String,
  coordinates: Number,
  user: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;