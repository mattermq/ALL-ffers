require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const scrapeRouter = require('./routes/scrape.js');
const offersRouter = require('./routes/offers.js');

mongoose.connect(process.env.MONGO_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });

const session = require('express-session');
const passport = require('passport');
const passportSession = require('passport-session');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'very difficult key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true
};
app.use(cors(corsOptions))

app.post('/signup', async (req, res, next) => {
  const { name, email, password } = req.body
  const candidate = await User.findOne({ email })
  if (!name || !email || !password) {
    res.status(400)
    return res.json({ message: 'Fill out all fields!' })
  } else if (candidate) {
    res.status(400)
    return res.json({ message: 'User with this email already exists!' })
  }
  bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    if (err) return next(err)
    else {
      const newUser = new User({
        name,
        email,
        password: hash,
      })
      newUser.save();
      console.log('User Registration successful');
      req.login(newUser, function (err) {
        if (err) { return next(err) }
        console.log(req.session)
        return res.json(newUser)
      })
    }
  })
})

app.post('/login', async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  const match = await bcrypt.compare(password, user.password);
  if (!email || !password) {
    return res.json({ message: 'Fill out all fields!' })
    res.status(400)
  }
  else if (!user) {
    res.status(404)
    return res.json({ message: 'No user with this email. Please sign up.' })
  }
  else if (!match)
    return res.json({ message: 'Wrong password!' })
  else {
    req.login(user, function (err) {
      if (err) { return next(err) }
      // console.log('LOGIN req.user', req.user)
      // console.log('LOGIN req.session', req.session)
      // console.log('LOGIN req.session.passport.user', req.session.passport.user)
      return res.json({ username: user.name, _id: user._id })
    })
  }
})

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.use('/scrape', scrapeRouter);
app.use('/offers', offersRouter);

app.listen(process.env.PORT || 3003);
