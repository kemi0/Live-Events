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







let dataArray= [];
function getDataFromApi(){
     const genreArray = ['music_blues','music_classical','music_country','music_dance','music_easy_listening','music_electronic','music_folk','music_jazz','music_latin','music_newage','music_opera','music_rb','music_reggae','music_vocal','music_rap_hiphop','music_metal','music_religious','music_rock','music_pop','music_world','music_alternative','music_childrens'];
     let genreData;
     for (let genreIndex=0; genreIndex<genreArray.length; genreIndex++){
         const genre = genreArray[genreIndex];
         axios.get(`http://api.eventful.com/json/events/search?app_key=Zb7jwSS8MQppFwhH&location=birmingham&date=2018051300-2018081400&image_sizes=blackborder500,block250&page_size=1000&category=${genre}&include=popularity`).then(response => {
             console.log(genre + '**************************************************************************************************************');
             genreData = response.data.events.event;
             console.log(genreData.length);
             // dataArray.push(genreData);
             console.log(dataArray);
         }).catch(error => {
             console.log(error);
         });

     }

}

axios.all([getDataFromApi()]).then(function(response){
    console.log(dataArray);
})








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

