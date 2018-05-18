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







var dataArray= [];
function getDataFromApi(){

     const genreArray = ['music_blues','music_classical','music_country','music_dance','music_easy_listening','music_electronic','music_folk','music_jazz','music_latin','music_newage','music_opera','music_rb','music_reggae','music_vocal','music_rap_hiphop','music_metal','music_religious','music_rock','music_pop','music_world','music_alternative','music_childrens'];
     let genreData;
     for (let genreIndex=0; genreIndex<genreArray.length; genreIndex++){
         const genre = genreArray[genreIndex];
         axios.get(`http://api.eventful.com/json/events/search?app_key=Zb7jwSS8MQppFwhH&location=birmingham&date=2018060100-2018070100&image_sizes=blackborder500,block250&page_size=1000&category=${genre}&include=popularity`).then(response => {
             genreData = response.data.events.event;
             for (let resultIndex=0; resultIndex<genreData.length; resultIndex++ ){
                 // making event object including the genre name
                 if(genreData[resultIndex].popularity) {var popularity = genreData[resultIndex].popularity;}
                 if(genreData[resultIndex].latitude) {var latitude = genreData[resultIndex].latitude;}
                 if(genreData[resultIndex].longitude) {var longitude = genreData[resultIndex].longitude;}
                 if(genreData[resultIndex].postal_code) {var postal_code = genreData[resultIndex].postal_code;}
                 if(genreData[resultIndex].start_time) {var start_time = genreData[resultIndex].start_time;}
                 if(genreData[resultIndex].title) {var title = genreData[resultIndex].title;}
                 if(genreData[resultIndex].venue_name) {var venue_name = genreData[resultIndex].venue_name;}
                 if(genreData[resultIndex].venue_address) {var venue_address = genreData[resultIndex].venue_address;}
                 if(genreData[resultIndex].image.blackborder500) {var image500px = genreData[resultIndex].image.blackborder500;}
                 if(genreData[resultIndex].image.block250) {var image250px = genreData[resultIndex].image.block250;}
                 if(genreData[resultIndex].owner) {var owner = genreData[resultIndex].owner;}
                 if(genreData[resultIndex].description) {var description = genreData[resultIndex].description;}
                 if(genreData[resultIndex].performers.performer.name) {var performers = genreData[resultIndex].performers.performer.name;}
                 let eventObject = {
                     genre: genre,
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
                     performers: performers,
                 }
                 dataArray.push(eventObject);
                 console.log(dataArray.length);
             }
         }).catch(error => {
             //console.log(error);
         });

     }

}

axios.all([getDataFromApi()]).then(function(response){
    console.log(dataArray);
})

// Data to fetch //////////////
// popularity: '0047',
// latitude: '33.497336',
// longitude: '-86.793077',
// postal_code: '35205',
// start_time: '2018-05-31 21:00:00',
// title: 'Southern Avenue W/ Lamont Landers',
// venue_name: 'Zydeco',
// venue_address: '2001 15th Avenue South',
// image:
//     { blackborder500:
//     { width: '500',
//         url: 'http://d1marr3m5x4iac.cloudfront.net/images/blackborder500/I0-001/039/618/098-3.jpeg_/southern-avenue-w-lamont-landers-98.jpeg',
//         height: '500' },
//         block250:
//         { width: '250',
//             url: 'http://d1marr3m5x4iac.cloudfront.net/images/block250/I0-001/039/618/098-3.jpeg_/southern-avenue-w-lamont-landers-98.jpeg',
//             height: '250' } },
//
//
// owner: 'evdb',
//
//     description: null,
//
//     performers:
//         { performer:
//         { creator: 'southernswinger',
//     linker: 'evdb',
//     name: 'Big Bad Voodoo Daddy',
//     url: 'http://concerts.eventful.com/Big-Bad-Voodoo-Daddy?utm_source=apis&utm_medium=apim&utm_campaign=apic',
//     id: 'P0-001-000020830-0',
//     short_bio: 'Big Band Voodoo Daddy'








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

