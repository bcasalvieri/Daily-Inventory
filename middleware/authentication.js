const authCheck = (req, res, next) => {
  // if user is not logged in
  if (!req.user){
    res.redirect('/auth/login');
  } else {
    next();
  };
};

module.exports = authCheck;