const express = require('express');
const routes = require('./routes');
const passportSetup = require('./middleware/passport-setup');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 3000;

// set up view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// do I need both?
app.use(cookieParser());
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
app.use(routes);

// create home route
app.get('/', (req, res) => {
  res.render('home', {user: req.user});
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});