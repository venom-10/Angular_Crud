const express = require('express')
const validator = require('email-validator');
const router = express.Router();
const userAuthDb = require('../db/db')
const { validatePassword } = require('../utilities');
const bcrypt = require('bcryptjs');
const userAuth = require('../Models/userAuth');


const connect = userAuthDb.connect;

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;


    // validate password
    if (!validatePassword(password)) {
        return res.status(422).send('Password is not valid type');
    }


    // Hash Password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    try {
        const user = await userAuth.create({ name, email, password: hashPassword });
        return res.status(201).send('User Created Successfully');
    }
    catch (err) {
        console.log(err);
        return res.status(422).send(`There is an error`);
    }

})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userAuth.findOne({ where: { email } });
    if (!user) {
        return res.status(401).send('email is wrong');
    }
    const { password: hashPassword } = user;
    if (!(bcrypt.compareSync(password, hashPassword)))
        return res.status(401).send('password is wrong');
    return res.status(200).send('user found successfully');
})
module.exports = router;