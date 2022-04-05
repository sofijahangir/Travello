const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validate = require('validator');
const Camp_Owner = require('../models/camp_owner');
const Admin = require('../models/admin');

// Admin Signup
const singup = async (req, res) => {
  try {
    const pass = req.body.password;
    const { email } = req.body;
    const phone = req.body.mobile;
    if (email) {
      if (!validate.isEmail(email)) {
        throw new Error('Invalid Email');
      }
    }
    if (pass.length < 7) {
      throw new Error('Password Invalid');
    }
    if (phone) {
      if (!validate.isMobilePhone(phone, 'en-IN')) {
        throw new Error('Invalid Mobile Number');
      }
    }
    const newUser = await new Admin(req.body);
    const gentoken = await newUser.genAuthToken();
    console.log('gentoken', gentoken);
    await newUser.save();
    res.status(201).json({
      message: 'User Created',
      user: newUser,
      token: gentoken,
    });
  } catch (error) {
    console.log(error);
    const msg = error.message;
    const msg_splitted = msg.split(' ');
    console.log('Conflict', msg_splitted[11]);
    if (msg_splitted[11] == 'mobile:') {
      res
        .status(409)
        .send('Mobile Number Already Exist Please Try New Credentials');
    } else if (msg_splitted[11] === 'email:') {
      res.status(409).send('Email Already Exist Please Try New Credentials');
    } else if (error.message === 'Password Invalid') {
      res.status(409).send('Password Length Must Be Atleast 7 Characters');
    } else if (error.message === 'Invalid Emai') {
      res.status(409).send(error.message);
    } else if (error.message === 'Invalid Mobile Number') {
      res.status(409).send(error.message);
    } else {
      res.status(409).send(error.message);
    }
  }
};

// Admin Login

const login = async (req, res) => {
  try {
    const user = await Admin.findByCredentials(
      req.body.email,
      req.body.password
    );
    if (!user) {
      throw new Error('No User Found');
    }
    const token = await user.genAuthToken();
    res.status(200).json({ Message: 'Login Successfully', token, user: user });
  } catch (error) {
    if (error.message == 'No User Found') {
      res.status(404).send(`${error.message} With Given Credentials`);
    }
  }
};

// exports.auth = async (req, res) => {
//   res.send(req.profile);
// };

module.exports = { singup, login };
