const axios = require('axios');
const express = require('express');
const connection = require('../config/db-connection');



const getDataFromEventfullApi = ()=>{
  const BASE_URL = 'http://api.eventful.com/json/events/search';
  const API_KEY = '?app_key=Zb7jwSS8MQppFwhH';
  //formating the date to current date for the 
  const now = new Date(); 
  const currentYear = now.getFullYear();
  const currentDate = now.getDate();
  const currentMonth = now.getMonth()+1;
  const current = currentYear+'0'+currentMonth+currentDate+'00';
  console.log(current);
 
  const allPromises = {};
  const genreArray = ['music_blues', 'music_classical','music_country','music_dance','music_easy_listening','music_electronic','music_folk','music_jazz','music_newage','music_rb','music_vocal','music_rap_hiphop','music_metal','music_religious','music_rock','music_pop','music_world','music_alternative', 'music_childrens','music_opera','music_latin','music_reggae'];

    genreArray.map((genre, index)=>{
      // const key = genre; 
      // const eventsByGenre = [];
  

        // const sql = `INSERT IGNORE INTO genres ( genre_name ) VALUES ('${genre}')`;

        // connection.query(sql, function(err, result){
        //   if(err) throw err;
        //   console.log(`${genre} inserted to the table`);
        // })
        // eventsByGenre.push(
   axios.get(`${BASE_URL}${API_KEY}&location=birmingham&date=${current}-2019010100&sort_order=date&category=${genre}&image_sizes=blackborder250,block100&page_size=1000&include=popularity`)
          .then(resp=>{
            const events = resp.data.events
            const total_event = resp.data.total_items;
            console.log('The '+ genre +' has: ' +  total_event + 'events');;
            // return events
          })
          .catch(err=>{
            if(err) throw err; 
          })
    // )
            

    // allPromises[key] = eventsByGenre; 
    
  
  
  });

    // console.log(allPromises);
//////////////////////////*/////////////////////////////////////////////////////////
    // allPromises.push(axios.get(`${BASE_URL}${API_KEY}&location=birmingham&date=${current}-2019010100&sort_order=date&category=${genre}&image_sizes=blackborder250,block100&page_size=1000&include=popularity`))
    // Promise.all(apiResults).then(response=>{
    //   // console.log('ARGUMENTS:', arguments);
    //   response.map((data, index)=>{
    //     // console.log(genre);
    //     console.log(data.data.events)
    //   })  
    // }).catch(err=>{
    //   if(err) throw err;
    // })

}

 module.exports = getDataFromEventfullApi;


 //           .then(response=>{

  //          const total_events = response.data.total_items;
  //               if(total_events > 0){
  //                 const result = response.data.events.event;
  //                 console.log(`${genre} has event_total: `, total_events);
  //                 console.log(`${genre} fetched out events are: `, result.length);
  //                 result.map((eventData, index)=>{
  //                   const zipCode = eventData.postal_code;

  //                   console.log(zipCode);

  //                 })
  //               }else{
  //                 const result = response.data;
  //                 console.log(`${genre} has event_total: `, total_events);

  //               }
  //           })
  //          .catch(error=>{
  //            console.log('Error message', error);
  //          })
  // })



  
  
  



