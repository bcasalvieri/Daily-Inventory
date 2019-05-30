const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./middleware/passport-setup');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 3000;

// set up view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/daily-inventory';
mongoose.connect(mongoUri, {
  useNewUrlParser: true
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// create home route
app.get('/', (req, res) => {
  res.render('home', {user: req.user});
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});