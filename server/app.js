'use strict'
const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;



app.use(express.json());

// For checking
app.get('/', (req, res) => {
    res.send('Hello from app.js');
})

app.use('/api/user', require('./router/userAuth'));

app.use('/api/userData', require('./router/userData'));


app.listen(3000, function () {
    console.log(`Server is running at ${PORT}`);
})