const mongoose = require("mongoose");
const validator = require('validator');

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    validate(value) {
      if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        throw new Error('Password must contain at least one letter and one number');
      }
    },
    private: true, // used by the toJSON plugin
  },
  imageUrl: String,
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email');
      }
    },
  },
  role: String,
});
userSchema.set("timestamps", true);

module.exports = mongoose.model("User", userSchema);
