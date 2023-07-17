const express = require("express");
const validator = require("email-validator");
const router = express.Router();
const { validatePassword } = require("../utilities");
const bcrypt = require("bcryptjs");
const userAuth = require("../Models/userAuth");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const path = require("path");


dotenv.config({ path: path.join(__dirname, "../../.env") });

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // validate password
  if (!validatePassword(password)) {
    return res.status(422).send("Password is not valid type");
  }

  // Hash Password
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  try {
    const user = await userAuth.create({ name, email, password: hashPassword });
    return res.status(201).send("User Created Successfully");
  } catch (err) {
    console.log(err);
    return res.status(422).send(`There is an error`);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userAuth.findOne({ where: { email } });
  if (!user) {
    return res.status(401).send("email is wrong");
  }
  const { password: hashPassword } = user;
  if (!bcrypt.compareSync(password, hashPassword))
    return res.status(401).send("password is wrong");
  else {
    const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '7d' });
    console.log('token', token)
    return res.status(200).send("user login successfully");
  }
});
module.exports = router;
