const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '../../.env') });

const sequelize = new Sequelize(process.env.DATABASE, process.env.NAME, process.env.PASSWORD, {
  dialect: 'mysql'
})

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('connection succesfull');
  }
  catch (err) {
    console.log(err);
  }
}
module.exports = {
  connect,
  sequelize
}