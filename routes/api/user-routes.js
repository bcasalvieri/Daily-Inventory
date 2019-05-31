const router = require('express').Router();
const authCheck = require('../../middleware/authentication');
const { getUserProfile } = require('../../controllers/user-controller');

router
  .route('/')
  .get(authCheck, getUserProfile);

module.exports = router;