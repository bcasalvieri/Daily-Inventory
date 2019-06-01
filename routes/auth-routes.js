const router = require('express').Router();
const passport = require('passport');

// auth login
router
  .route('/login')
  .get((req, res) => {
    res.render('login', {user: req.user});
  });

// auth logout
router
  .route('/logout')
  .get((req, res) => {
  // handle with passport
    req.logout();
    res.redirect('/');
  });

// auth with google
router
  .route('/google')
  .get(passport.authenticate('google', {
    scope: ['profile', 'email']
    }
  ));

// callback route for google to redirect to
router
  .route('/google/redirect')
  .get(passport.authenticate('google'), (req, res) => {
    res.json(req.user);
    // res.redirect('/profile/');
  });

module.exports = router;
