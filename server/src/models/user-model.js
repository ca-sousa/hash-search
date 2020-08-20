const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  screen_name: String,
  twitter_id: String,
  profile_image_url: String,
  tweets: [{
    created_at: String,
    id: String,
    text: String,
    coordinates: Number,
    user_name: String,
  }],  
});

const User = mongoose.model("user", userSchema);

module.exports = User;