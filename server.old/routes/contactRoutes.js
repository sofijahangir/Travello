const express = require('express');

const router = express.Router();
const contact_controllers = require('../controllers/contact_controllers');

router.post('/sendMessage', contact_controllers.send_contact_message);

router.get('/getAllMessages', contact_controllers.get_contact_messages);

module.exports = router;
