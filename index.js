///back-end index.js
const express = require('express'); 
const cors = require('cors');
//setup back end to handle React 
const { resolve } = require('path'); 
//setup port for deploy else use 8000 as port; 
const PORT = process.env.PORT || 8000;

const app = express();
//when doing get 
app.use(cors());
//when doing POST
app.use(express.json());
//for the React statily serve a folder
app.use(express.static(resolve(__dirname,'client','dist')));




//console out the data getting back from evetfull api /fetch-data-api/fetch-data
  // const getEventsFromApi = require('./server/fetch-data-api/fetch-data');
  // getEventsFromApi(function callback(responeFromAPI){
  //   // console.log('data response from eventfull',responeFromAPI);
  // })

//MAKING POST request///////////////



//MAKING get request /////////////// 
// app.get('/api/user-data',(req, res)=>{
// //this is getting data from our own DB; /sql-module/testingSQL
//   const getDataFromDB = require('./server/sql-module/testingSQL');
//   //calling the testData function from testingSQL.js here 
//   getDataFromDB(function callback(responeFromDB){
//     //sending to the front_end;
//     // res.send(responeFromDB);

//   })
// })



// app.get('/', function (req, res){
//   res.send ('<h1>Hello Katy!</h1>')
// })




////do not touch code below////
///last end point 
app.get('*',(req, res)=>{
  res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
})


app.listen( PORT, function(){
  console.log('Express Server running at localhost! ' + PORT);
}).on('error', (err)=>{
  console.log('Server Error', err.message); 
  console.log('Do you already have a server running on PORT: ' + PORT +'?')
}); 

