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
        return res.status(500).send('There is an error in Database');
    }
})

// update user data into database
router.post('/update', async (req, res) => {
    const id = req.query.id;
    try {
        const existedUser = await userData.findOne({ where: { id } });
        const fields = ['name', 'state', 'address', 'dob', 'gender'];
        fields.forEach((field) => existedUser[field] = req.body[field])
        await existedUser.save();
        return res.status(200).send('user updated successfully');
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('There is an error in Database');
    }
})

// delete user data into database
router.get('/delete', async (req, res) => {
    const id = req.query.id;
    try {
        const existedUser = await userData.findOne({ where: { id } });
        await existedUser.destroy();
        return res.status(200).send('This entry has removed');
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('There is an error in Database');
    }
})



module.exports = router;