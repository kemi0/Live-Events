const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'c3.18db',
  port: '3307'
});

connection.connect((err)=>{
  if(err){
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Mysql is connected as id ' + connection.threadId);
});







connection.end();
module.exports = connection;
