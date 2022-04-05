const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const cors = require('cors');

const flash = require('connect-flash');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const passport = require('passport');
const User = require('./models/user');
const mongoDb = require('./config/db');
const bookingRoutes = require('./routes/booking');

const userRoutes = require('./routes/user');
const indexPageRoutes = require('./routes/index');

// Passport Config
require('./config/passport-config')(passport);

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cors());

mongoDb();
const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/Travelo',
  collection: 'mySessions',
});

// Express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: store,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use('/', userRoutes);
app.use('/', indexPageRoutes);
app.use('/book', bookingRoutes);
// app.get('/', async (req, res) => {
//   // fetch all the posts
//   const posts = await Posts.find().sort({ createdAt: 'desc' });

//   res.render('index', { posts });
// });

// Logout routes
app.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
