// Post Controller

const Booking = require('../models/bookings');
const User = require('../models/user');

// Book a Camp

const bookNew = async (req, res) => {
  const { date, river, tree, tent } = req.body;
  const newPost = new Booking({
    date,
    river,
    tree,
    tent,
  });

  // console.log(newPost);

  await newPost.save();

  // res.redirect('/Adventures');

  res.send('Data Test Submitted Backend');
};

const getBookingsOfUser = async (req, res) => {
  const userId = req.session.passport.user;
  const posts = await Booking.find({ userId });
  // console.log(posts);
  res.render('/dashboard', { posts });
};

module.exports = { bookNew, getBookingsOfUser };
