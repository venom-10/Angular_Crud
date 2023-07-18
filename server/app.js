"use strict";
const express = require("express");
const app = express();


const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.static("public"));
app.use("/api/userData", require("./middlewares/validateToken"));
app.use("/api/user", require("./router/userAuth"));

app.use("/api/userData", require("./router/userData"));










// For checking
app.get("/", (req, res) => {
  res.send("Hello from app.js");
});

app.listen(3000, function () {
  console.log(`Server is running at ${PORT}`);
});
