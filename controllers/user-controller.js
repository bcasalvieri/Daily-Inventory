const router = require('express').Router();
const { User } = require('../models');
const handler = require('../utils/promise-handler');

// GET user profile
const getUserProfile = async (req, res) => {
  const [userErr, userProfile] = await handle(User.findById(req.user._id));

  if (userErr) {
    res.status(500).json(userErr);
  } else {
    res.status(200).json(userProfile);
  };
};

module.exports = {
  getUserProfile
};
 