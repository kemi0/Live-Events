//establish a connection with mysql:
const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'LMF',
  port: '3307'
});

connection.connect((err)=>{
  if(err){
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Mysql is connected as id ' + connection.threadId);
});








module.exports = connection;
