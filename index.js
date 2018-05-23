///back-end index.js
const express = require('express');
const cors = require('cors');
//setup back end to handle React
const { resolve } = require('path');
//setup port for deploy else use 8000 as port;
const PORT = process.env.PORT || 8000;
const axios = require('axios');


const app = express();
//when doing get
app.use(cors());
//when doing POST
app.use(express.json());
//for the React statily serve a folder
app.use(express.static(resolve(__dirname,'client','dist')));



async function test(){
  const connection = require('./server/config/db-connection');
  const getDataFromEventfullApi = require('./server/fetch-data-api/fetch-data');
  const outputObjWithAllData = await getDataFromEventfullApi();
  console.log (outputObjWithAllData);







}
test();






// outputPromise.then((output) => {
//   console.log(output);
// })
// console.log(output);

// console.log(output);

// const apiResults = getDataFromEventfullApi();
// Promise.all(apiResults).then(response=>{
//   // console.log('ARGUMENTS:', arguments);
//   response.map((data, index)=>{
//     // console.log(genre);
//     console.log(data.data.events)
//   })  
// }).catch(err=>{
//   if(err) throw err;
// })














// connection.query('SELECT * FROM genres', (err, result,fields)=>{
//   if(err) throw err;
//   console.log(`this is the genres table: ${result}`);
// })

// //MAKING POST request///////////////

// //console out the data getting back from evetfull api //fetch-data-api/fetch-data
// app.get('/api/user-data',(req, res)=>{
//   const getEventsFromApi = require('./server/fetch-data-api/fetch-data');
  // getEventsFromApi();
  // console.log('genre data from  eventfull api', getEventsFromApi());
  // getEventsFromApi(function callback(responeFromAPI){
  //   console.log('data response from eventfull',responeFromAPI);
  // })
  // console.log('genre data from  eventfull api', getEventsFromApi());
  // getEventsFromApi();
    
  // console.log('this is hahaha', getEventsFromApi);



//   const apiResults = getEventsFromApi();
//   Promise.all(apiResults).then(response => {
//     console.log('ARGUMENTS:', arguments);
//     const output = response.map( data => {
//       // function here to shape the data then store into DB
//       // end; 
//       // console.log(data.data)
//       return data.data;
//     });

//     res.send({success: true, data: output});
//   }).catch(err => {
//     console.log('ERROR:', err.message);

//     res.send({success: false, error: err.message});
//   });
// });











// //MAKING POST request///////////////

// //MAKING get request /////////////// 
// // app.get('/api/user-data',(req, res)=>{
// // //this is getting data from our own DB; /sql-module/testingSQL
// //   const getDataFromDB = require('./server/sql-module/testingSQL');
// //   //calling the testData function from testingSQL.js here 
// //   getDataFromDB(function callback(responeFromDB){
// //     //sending to the front_end;
// //     res.send(responeFromDB);

// //   })
// })

// function getDataFromApi(){

    //  const genreArray = ['music_blues','music_classical','music_country','music_dance','music_easy_listening','music_electronic','music_folk','music_jazz','music_latin','music_newage','music_opera','music_rb','music_reggae','music_vocal','music_rap_hiphop','music_metal','music_religious','music_rock','music_pop','music_world','music_alternative','music_childrens'];

    //  let genreData;
    //  for (let genreIndex=0; genreIndex<genreArray.length; genreIndex++){
    //      const genre = genreArray[genreIndex];
    //      axios.get(`http://api.eventful.com/json/events/search?app_key=Zb7jwSS8MQppFwhH&location=birmingham&date=2018060100-2018070100&image_sizes=blackborder500,block250&page_size=1000&category=${genre}&include=popularity`).then(response => {
    //          genreData = response.data.events.event;
    //          for (let resultIndex=0; resultIndex<genreData.length; resultIndex++ ){
    //              // making event object including the genre name
    //              if(genreData[resultIndex].popularity) {var popularity = genreData[resultIndex].popularity;}
    //              if(genreData[resultIndex].latitude) {var latitude = genreData[resultIndex].latitude;}
    //              if(genreData[resultIndex].longitude) {var longitude = genreData[resultIndex].longitude;}
    //              if(genreData[resultIndex].postal_code) {var postal_code = genreData[resultIndex].postal_code;}
    //              if(genreData[resultIndex].start_time) {var start_time = genreData[resultIndex].start_time;}
    //              if(genreData[resultIndex].title) {var title = genreData[resultIndex].title;}
    //              if(genreData[resultIndex].venue_name) {var venue_name = genreData[resultIndex].venue_name;}
    //              if(genreData[resultIndex].venue_address) {var venue_address = genreData[resultIndex].venue_address;}
    //              if(genreData[resultIndex].image.blackborder500) {var image500px = genreData[resultIndex].image.blackborder500;}
    //              if(genreData[resultIndex].image.block250) {var image250px = genreData[resultIndex].image.block250;}
    //              if(genreData[resultIndex].owner) {var owner = genreData[resultIndex].owner;}
    //              if(genreData[resultIndex].description) {var description = genreData[resultIndex].description;}
    //              if(genreData[resultIndex].performers.performer.name) {var performers = genreData[resultIndex].performers.performer.name;}
    //              let eventObject = {
    //                  genre: genre,
    //                  popularity: popularity,
    //                  latitude: latitude,
    //                  longitude: longitude,
    //                  postal_code: postal_code,
    //                  start_time: start_time,
    //                  title: title,
    //                  venue_name: venue_name,
    //                  venue_address: venue_address,
    //                  image500px: image500px,
    //                  image250px: image250px,
    //                  owner: owner,
    //                  description: description,
    //                  performers: performers,
    //              }
    //              dataArray.push(eventObject);
    //              console.log(dataArray);
    //          }
    //      }).catch(error => {
    //     //      //console.log(error);
    //     });

    //  }

// }

// axios.all([getDataFromApi()]).then(function(response){
//     console.log(dataArray);
// })



//MAKING get request ///////////////

// app.get('/api/user-data',(req, res)=>{
//   const testData = require('./sql-module/testingSQL');
//   //calling the testData function from testingSQL.js here
//   testData(function callback(responeFromDB){
//     //sending to the front_end;
//     res.send(responeFromDB);

// //   const user ={
// //    name : 'Jim Bob',
// //    email: 'jimhebob@gmail.com'
// //  }
// // });

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

