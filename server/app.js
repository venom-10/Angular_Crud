'use strict'
const express = require('express');
const userAuthDb = require('./db/userAuthDb')

const app = express();
const PORT = 3000 || process.env.PORT;

userAuthDb.connectToMySql();
app.use(express.json());

// For checking
app.get('/', (req, res)=>{
    res.send('Hello from app.js');
})

app.use('/user', require('./router/userAuth'));


app.listen(3000, function () {
    console.log(`Server is running at ${PORT}`);
})