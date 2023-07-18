const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "../../.env") });

const validateToken = (req, res, next) => {
  const token = req.headers.token;
  try {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (err) {
    return res.status(401).json({ msg: "token is not valid" });
  }
};

module.exports = validateToken;
