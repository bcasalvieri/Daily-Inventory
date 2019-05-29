const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

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

UserSchema.pre('save', function createPassword(next) {
  if (this.isNew || this.isModified('password')) {
    const document = this;
    bcrypt.hash(this.password, saltRounds, (err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      };
    });
  };
});

UserSchema.methods.isCorrectPassword = function isCorrectPassword(password) {
  const document = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, document.password, function compareCallback(err, same) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(same);
      };
    });
  });
};

module.exports = mongoose.model("User", UserSchema);