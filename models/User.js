const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\../, "Please use a valide email address!"]
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", UserSchema);