const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root@123',
  database: 'angular_crud'
})



const connectToMySql = () => {
  connection.connect();
}
module.exports = { connection, connectToMySql }