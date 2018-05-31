//establish a connection with mysql: 
const mysql = require('mysql');
//local server 

const connection = mysql.createConnection({
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
  console.time('mysql');
  console.log('Mysql is connected as id ' + connection.threadId);

});

//exporting out for other files to use the connection!
module.exports = connection;
//export out to index.js s
