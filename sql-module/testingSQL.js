//requiring the db connection from db-connection file; 
const connection = require('../config/db-connection');
// making test data 
//making a function() with callback function that has query in it; 
const testData = (callback)=>{
  
  connection.query("SELECT * FROM customers",(error, results, fields)=>{
    if (error) throw error;
  
    console.log('The solution is: ', JSON.stringify(results));
    callback(results);
  })
};





module.exports = testData