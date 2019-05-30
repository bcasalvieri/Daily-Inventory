const router = require('express').Router();
const authCheck = require('express').Router();

router
  .route('/')
  .get(authCheck, (req, res) => {
  res.render('profile', {user: req.user});
});

module.exports = router;