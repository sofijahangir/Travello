const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./Database/database');
const cors = require('cors');

const port = process.env.PORT || 5000;
const userRoutes = require('./routes/camperRoutes');
const ownerRoutes = require('./routes/campOwnerRoutes');
const adminRoutes = require('./routes/adminRoutes');
const bookingsRoutes = require('./routes/bookingRoutes');
// const campRoutes = require("./routes/camp_routes");
const filterRoutes = require('./routes/filterCamps');
const razorpayRoutes = require('./routes/razorpayRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use(cors());

// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(userRoutes);
app.use('/owner', ownerRoutes);
app.use('/admin', adminRoutes);
app.use('/camps/filter/', filterRoutes);
app.use('/booking', bookingsRoutes);
// app.use('/camp',campRoutes);
app.use('/payment', razorpayRoutes);
app.use('/contact', contactRoutes);

app.listen(port, () => {
  console.log(`Server started http://localhost:${port}`);
});
