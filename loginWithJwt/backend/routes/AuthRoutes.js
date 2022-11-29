const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//const User = mongoose.model('User');
const User = require("../models/Users");
const router = express.Router();

router.post("/signup", async (req, res) => {
   const {username, email, password } = req.body;
   // const email = req.body.email.Email;
   // const password = req.body.password.Password;
   // console.log('email :\n' , req.body.email.Email);
   // console.log('password : \n',password.Password);

   try {
      const user = new User({username, email, password });
      await user.save();

      // const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
      // console.log(token);
      // res.send({ token });
      res.send("You made a post request");
   } catch (err) {
      return res.status(422).send(err.message);
   }
});

module.exports = router;
