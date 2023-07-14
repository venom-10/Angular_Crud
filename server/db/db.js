const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '../../.env') });

const sequelize = new Sequelize(process.env.DATABASE, process.env.NAME, process.env.PASSWORD, {
  dialect: 'mysql'
})

module.exports = sequelize;
