const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true
  },
  matches: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;