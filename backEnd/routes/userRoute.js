// module.exports = router;
const express = require('express');
const router = express.Router();
const userDb = require('../models/register');
// const { body, validationResult } = require("express-validator");
var bcrypt = require('bcrypt');
const JWT_SECRET = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/authentication');
const { json } = require('body-parser');

////register user

router.post('/register', async (req, res) => {
  // check user already there or not
  // console.log(req.body);
  try {
    const user = await userDb.findOne({ email: req.body.email });

    if (!user) {
      const securePassword = await bcrypt.hash(req.body.password, 10);

      //new user credentials

      const newUseInfo = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: securePassword,
        pincode: req.body.pincode,
        district: req.body.district,
        address: req.body.address,
        state: req.body.state,
      };

      const newuser = await userDb.create(newUseInfo);

      const data = {
        user: {
          id: newuser.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);

      const success = true;
      res.send({ success, authtoken });
    } else {
      res.status(400).json({ error: 'sorry this user alredy rigistered' });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: 'internal server error', error: err.message });
  }
});

///login
router.post('/login', async (req, res) => {
  //checking validation

  const { email, password } = req.body;
  try {
    const user = await userDb.findOne({ email });

    let success = false;
    //check email present or not
    if (!user) {
      return res.json({ success, error: 'please enter valid details' });
    }

    //checking password
    const password_compare_res = await bcrypt.compare(password, user.password);

    if (!password_compare_res) {
      return res.json({ success, error: 'invalid password' });
    }

    const data = {
      user: {
        id: user.id,
      },
    };

    const authtoken = jwt.sign(data, JWT_SECRET);

    success = true;

    res.json({ success, authtoken, name: user.name.split(' ')[0] });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ error: 'login server error' });
  }
});

router.get('/verify', fetchuser, async (req, res) => {
  if (req.user) {
    const data=await userDb.findOne( req.user );
    res.json({
      user:req.user,
      data:data,
      status: 'success',
    });
  }
});

module.exports = router;
