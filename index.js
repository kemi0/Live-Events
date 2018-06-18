///back-end index.js
const express = require('express');
const cors = require('cors');
//setup back end to handle React
const { resolve } = require('path');
//setup port for deploy else use 8000 as port;
const PORT = process.env.PORT || 9000;
const axios = require('axios');
var mysql = require('mysql');
const connection = require('./server/config/db-connection');
const scheuldeUpdateDb = require('./scheduleJob');

const app = express();
//when doing get
app.use(cors());
//when doing POST ``
app.use(express.json());
//for the React statily serve a folder
app.use(express.static(resolve(__dirname,'client','dist')));
const timeStart = Date.now();


//end point for all the events without filter
const select_query =`SELECT *
FROM events,genres,venues,zipCode,performers,performers_events
WHERE events.genre_id = genres.genre_id 
AND events.venue_id = venues.venue_id
AND venues.zipcode_id = zipCode.zip_id
AND performers_events.performer_id = performers.performer_id
AND performers_events.event_id =events.event_id
ORDER BY events.event_date`;
// console.log(select_query);
app.get('/api/data', (req, res)=>{
  connection.query(select_query, (err, result)=>{
    if(err){
      res.send(err);
    }else{
      // const output = JSON.stringify(result,null,3) 
      // console.log(result.length);
      res.json(result);
    } 
  })
 
})

// //end point with filter for genre 

// const reach_genre = `SELECT * FROM genres`; 
// app.get('/api/genre', (req,res)=>{
//   connection.query(reach_genre,(err, result)=>{
//      if(err) throw err; 
//      console.log(result);
//   })
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
