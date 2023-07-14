const express = require('express');
const router = express.Router();
const userData = require('../Models/userData');


// get all Data
router.get('/allData', async (req, res) => {
    const page = req.query.page;
    try {
        const users = await userData.findAll({ offset: (page - 1) * 4, limit: 4 });
        const Data = JSON.stringify(users, null, 2);
        return res.status(200).send(Data);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('There is an error in Database');
    }
})

// get searched Data
router.get('/search', async (req, res) => {
    const name = req.query.name;
    const page = req.query.page;
    try {
        const users = await userData.findAll({ where: { name }, offset: (page - 1) * 4, limit: 4 });
        const searchedUsers = JSON.stringify(users, null, 2);
        return res.status(200).send(searchedUsers);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('There is an error in Database');
    }
})

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