//establish a connection with mysql: 
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'livemusicfinder',
  port: '3307'
});
connection.connect((err)=>{
  if(err){
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Mysql is connected as id ' + connection.threadId);
});

//exporting out for other files to use the connection!
module.exports = connection;
