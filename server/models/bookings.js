const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    river: {
      type: Array,
      required: true,
    },
    tree: {
      type: Number,
    },
    tent: {
      type: Number,
    },
  },
  { timestamps: true }
);
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
