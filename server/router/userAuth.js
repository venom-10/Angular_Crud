const express = require('express')
const validator = require('email-validator');
const router  = express.Router();
const userAuthDb = require('../db/userAuthDb')
const { validatePassword } = require('../utilities');
const bcrypt = require('bcryptjs');
const userAuth = require('../Models/userAuth');


const connect = userAuthDb.connect;
router.post('/register', async (request, response)=>{
    const {name, email, password} = request.body;
    // validate password
    if(!validatePassword(password)){
        return response.status(422).send('Password is not valid type');
    }
    // Hash Password
    const salt = bcrypt.genSaltSync(10);
    const npassword = bcrypt.hashSync(password, salt);
    try{
        const id = 1;
        const user = await userAuth.create({id, name, email, password});
        console.log('user created');
        return response.status(201).send('success');
    }
    catch(err){
        console.log(err);
        return response.status(422).send(`err is ${err}`);
    }
    
})

router.post('/login', (request, response)=>{
    res.send('this is login');
})
module.exports = router;