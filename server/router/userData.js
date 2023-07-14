const express = require('express');
const router = express.Router();
const userData = require('../Models/userData');


//  adding user data into database
router.post('/add', async (req, res) => {
    const { name, email, gender, address, state, dob } = req.body;
    try {
        const user = await userData.create({ name, email, gender, address, state, dob });
        return res.status(200).send('user created');
    }
    catch (err) {
        console.log(err);
        return res.status(503).send('There is an error in Database');
    }
})

// update user data into database
router.post('/update', async (req, res) => {
    const { name, state, address, dob, gender } = req.body;
    try {
        const user = await userData.create({ name, state, address, dob, gender });
        return res.status(200).send('user created');
    }
    catch (err) {
        console.log(err);
        return res.status(503).send('There is an error in Database');
    }
})




module.exports = router;