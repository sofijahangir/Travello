const express = require('express');
const { bookNew } = require('../controllers/booking');

const router = express.Router();

const { ensureAuthenticated } = require('../config/auth');

router.get('/new', ensureAuthenticated, (req, res) => {
  res.render('posts/newPost');
});
router.post('/new', bookNew);
// router.get('/get', getPosts);
// router.get('/dashboard', getPostsOfUser);

module.exports = router;
