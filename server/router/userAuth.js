const express = require('express')
const router  = express.Router();
const userAuthDb = require('../db/userAuthDb')
const connection = userAuthDb.connection;
router.post('/register', (req, res)=>{
    const {name, email, password} = req.body;
    
    const sql = `INSERT INTO userAuths (name, email, password) VALUES ('${name}', '${email}', '${password}')`;

    connection.query(sql, function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else {
            console.log('user created successfully');
            res.send('User created Successfully');
        }
    })
    
})

router.post('/login', (req, res)=>{
    res.send('this is login');
})
module.exports = router;