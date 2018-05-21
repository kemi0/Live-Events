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


//MAKING POST request///////////////





function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd // convert 5 => 05
    }

    if(mm<10) {
        mm = '0'+mm // convert 5 => 05
    }

    currentDate = yyyy+mm+dd+'00';
    endDate = (Number(yyyy)+1)+mm+dd+'00'; // next year, same date
    date = [currentDate,endDate]
    return(date);
}

const genreArray = ['music_blues','music_classical','music_country','music_dance','music_easy_listening','music_electronic','music_folk','music_jazz','music_latin','music_newage','music_opera','music_rb','music_reggae','music_vocal','music_rap_hiphop','music_metal','music_religious','music_rock','music_pop','music_world','music_alternative','music_childrens'];
let promises = [];
var genreArrayIndex = 0;
var dataArray= [];
var counter = 0;
var date = getDate();

for (let genreIndex=0; genreIndex<genreArray.length; genreIndex++){
    const genre = genreArray[genreIndex];
    promises.push(axios.get(`http://api.eventful.com/json/events/search?app_key=Zb7jwSS8MQppFwhH&location=birmingham&date=${date[0]}-${date[1]}&image_sizes=blackborder500,block250&page_size=1000&category=${genre}&include=popularity`));
}
axios.all(promises).then(function(resp) {

    const output = resp.map( dataGenres => {
        objsGenre = dataGenres.data.events; // each genre
        let genre = genreArray[genreArrayIndex++];
        if (objsGenre){
            //console.log(objsGenre[Object.keys(objsGenre)].length);// number of objects in genre object

            for (let eventIndex = 0 ; eventIndex<objsGenre[Object.keys(objsGenre)].length ; eventIndex++) {
                //console.log(objsGenre[Object.keys(objsGenre)][eventIndex]);
                genreData = (objsGenre[Object.keys(objsGenre)][eventIndex]);
                //console.log(genreData) ;
                 // making event object including the genre name
                 if(genreData.popularity) {var popularity = genreData.popularity;}
                 if(genreData.latitude) {var latitude = genreData.latitude;}
                 if(genreData.longitude) {var longitude = genreData.longitude;}
                 if(genreData.postal_code) {var postal_code = genreData.postal_code;}
                 if(genreData.start_time) {var start_time = genreData.start_time;}
                 if(genreData.title) {var title = genreData.title;}
                 if(genreData.venue_name) {var venue_name = genreData.venue_name;}
                 if(genreData.venue_address) {var venue_address = genreData.venue_address;}
                 if(genreData.image) {var image500px = genreData.image.blackborder500.url;} else {var image500px = ""}
                 if(genreData.image) {var image250px = genreData.image.block250.url;} else {var image250px = ""}
                 if(genreData.owner) {var owner = genreData.owner;}
                 if(genreData.description) {var description = genreData.description;}
                 if(genreData.performers) {var performer = genreData.performers.performer.name;} else {var performer = ""}
                 if(genreData.id) {var id = genreData.id;}
                 if(genreData.city_name) {var city_name = genreData.city_name;}
                 let eventObject = {
                     id: id,
                     genre: genre,
                     city_name: city_name,
                     popularity: popularity,
                     latitude: latitude,
                     longitude: longitude,
                     postal_code: postal_code,
                     start_time: start_time,
                     title: title,
                     venue_name: venue_name,
                     venue_address: venue_address,
                     image500px: image500px,
                     image250px: image250px,
                     owner: owner,
                     description: description,
                     performer: performer,
                 }
                dataArray.push(eventObject);
                ++counter;
            }

            }


    })
    //console.log(dataArray.length);
    //console.log(dataArray);
    console.log('number of registered events in a year: ',counter);

}).catch(err => {
    console.log('ERROR:', err.message);

});





// var counter = 0;
// var dataArray= [];
// function getDataFromApi(){
//
//
//      const genreArray = ['music_blues','music_classical','music_country','music_dance','music_easy_listening','music_electronic','music_folk','music_jazz','music_latin','music_newage','music_opera','music_rb','music_reggae','music_vocal','music_rap_hiphop','music_metal','music_religious','music_rock','music_pop','music_world','music_alternative','music_childrens'];
//      let genreData;
//     //const genreArray = ['music'];
//      for (let genreIndex=0; genreIndex<genreArray.length; genreIndex++){
//          const genre = genreArray[genreIndex];
//          axios.get(`http://api.eventful.com/json/events/search?app_key=Zb7jwSS8MQppFwhH&location=birmingham&date=2018060100-2018070100&image_sizes=blackborder500,block250&page_size=1000&category=${genre}&include=popularity`).then(response => {
//              genreData = response.data.events.event;
//              for (let resultIndex=0; resultIndex<genreData.length; resultIndex++ ){
//                  console.log('genreData.length', genreData.length);
//                  counter=counter+genreData.length;
//                  // making event object including the genre name
//                  if(genreData[resultIndex].popularity) {var popularity = genreData[resultIndex].popularity;}
//                  if(genreData[resultIndex].latitude) {var latitude = genreData[resultIndex].latitude;}
//                  if(genreData[resultIndex].longitude) {var longitude = genreData[resultIndex].longitude;}
//                  if(genreData[resultIndex].postal_code) {var postal_code = genreData[resultIndex].postal_code;}
//                  if(genreData[resultIndex].start_time) {var start_time = genreData[resultIndex].start_time;}
//                  if(genreData[resultIndex].title) {var title = genreData[resultIndex].title;}
//                  if(genreData[resultIndex].venue_name) {var venue_name = genreData[resultIndex].venue_name;}
//                  if(genreData[resultIndex].venue_address) {var venue_address = genreData[resultIndex].venue_address;}
//                  if(genreData[resultIndex].image.blackborder500) {var image500px = genreData[resultIndex].image.blackborder500;}
//                  if(genreData[resultIndex].image.block250) {var image250px = genreData[resultIndex].image.block250;}
//                  if(genreData[resultIndex].owner) {var owner = genreData[resultIndex].owner;}
//                  if(genreData[resultIndex].description) {var description = genreData[resultIndex].description;}
//                  if(genreData[resultIndex].performers.performer.name) {var performers = genreData[resultIndex].performers.performer.name;}
//                  if(genreData[resultIndex].id) {var performers = genreData[resultIndex].id;}
//                  let eventObject = {
//                      genre: genre,
//                      popularity: popularity,
//                      latitude: latitude,
//                      longitude: longitude,
//                      postal_code: postal_code,
//                      start_time: start_time,
//                      title: title,
//                      venue_name: venue_name,
//                      venue_address: venue_address,
//                      image500px: image500px,
//                      image250px: image250px,
//                      owner: owner,
//                      description: description,
//                      performers: performers,
//                  }
//                  dataArray.push(eventObject);
//                  //console.log(dataArray.length);
//                  //console.log(++counter);
//                  console.log('counter', counter);
//              }
//          }).catch(error => {
//              //console.log(error);
//          });
//
//      }
//
//
// }
//
// axios.all([getDataFromApi()]).then(function(response){
//     console.log(dataArray);
// })



//MAKING get request ///////////////

app.get('/api/user-data',(req, res)=>{
  const testData = require('./sql-module/testingSQL');
  //calling the testData function from testingSQL.js here
  testData(function callback(responeFromDB){
    //sending to the front_end;
    res.send(responeFromDB);

//   const user ={
//    name : 'Jim Bob',
//    email: 'jimhebob@gmail.com'
//  }
// });

  })
})



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

