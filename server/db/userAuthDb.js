const Sequelize = require('sequelize');

const sequelize = new Sequelize('angular_crud', 'root', 'Root@123', {
  dialect:'mysql'
})

const connect = async ()=>{
  try{
    await sequelize.authenticate();
    console.log('connection succesfull');
  }
  catch(err){
    console.log(err);
  }
}
module.exports = {
  connect,
  sequelize
}