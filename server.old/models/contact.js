const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: 'Invalid Email Address' });
      }
    },
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
