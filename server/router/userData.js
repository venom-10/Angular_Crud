const express = require('express');
const router = express.Router();
const userData = require('../Models/userData');
const multer = require('multer');
const sharp = require('sharp')


// get all Data
router.get('/allData', async (req, res) => {
    const page = req.query.page ?? 1;
    const filterBy = req.query.filter ?? 'id';
    try {
        const users = await userData.findAll({ order: [filterBy], offset: (page - 1) * 4, limit: 4 });
        const Data = JSON.stringify(users, null, 2);
        return res.status(200).send(Data);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('There is an error in Database');
    }
})

// get filtered Data
// router.get('/filter', async (req, res) => {
//     const filterBy = req.query.filter;
//     const page = req.query.page ?? 1;
//     try {
//         const users = await userData.findAll({ order: [filterBy], offset: (page - 1) * 4, limit: 4 });
//         const Data = JSON.stringify(users, null, 2);
//         return res.status(200).send(Data);
//     }
//     catch (err) {
//         console.log(err);
//         return res.status(500).send('There is an error in Database');
//     }
// })

// get searched Data
router.get('/search', async (req, res) => {
    const name = req.query.name;
    const page = req.query.page ?? 1;
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
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
        cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const newName = req.body.name + "_" + req.body.email+'.png';
    cb(null, newName);
  },
});

const upload = multer({ storage });


router.post('/add', upload.single('file'),  async (req, res) => {
    const { name, email, gender, address, state, dob, subjects } = req.body;
    const imagepath = (req.file) ? `${name}_${email}.png` : null;
    if (req.file) { 
        sharp(`public/images/${imagepath}`)
        .resize(320)
        .toFile(`public/thumbnail/${imagepath}`);   
    }
    try {
        const user = await userData.create({ name, email, gender, address, state, dob, imagepath, subjects });
        return res.status(200).json('user created');
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('There is an error in Database');
    }
})

// update user data into database
router.post('/update', async (req, res) => {
    const { id } = req.body;
    try {
        const existedUser = await userData.findOne({ where: { id } });
        const fields = ['name', 'state', 'address', 'dob', 'gender', 'subjects'];
        fields.forEach((field) => existedUser[field] = req.body[field])
        await existedUser.save();
        return res.status(200).json('user updated successfully');
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('There is an error in Database');
    }
})

// delete user data into database
router.post('/delete', async (req, res) => {
    const { id } = req.body;
    try {
        const existedUser = await userData.findOne({ where: { id } });
        await existedUser.destroy();
        return res.status(200).json('This entry has removed');
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('There is an error in Database');
    }
})



// count all row

router.get('/count', async (req, res) => {
    try {
        const { count, row } = await userData.findAndCountAll({});
        res.status(200).json(count);
    }
    catch (err) {
        console.log(err);
    }
})

// get user by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const user = await userData.findOne({ where: { id } });
        return res.json(user);

    }
    catch (err) {
        return res.json({msg:'Server Error'})
    }
})

module.exports = router;







// const sharp = require('sharp');


// sharp('public/images/default.png').resize(420).toFile('public/thumbnail/hello5.png')