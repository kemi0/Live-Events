
///back-end index.js
const express = require('express');
const cors = require('cors');
//setup back end to handle React
const { resolve } = require('path');
//setup port for deploy else use 8000 as port;
const PORT = process.env.PORT || 8000;
const axios = require('axios');
var mysql = require('mysql');


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
  const outputObj = await getDataFromEventfullApi();
  // console.log(outputObj) //this work!!! 

  for(let key in outputObj){
    console.log(key);

//// ********************* FORMAT DATA FOR genres TABLE*************************///

    const eventArrayInKey = outputObj[key];
    // eventArrayInKey is a array with many obj [{},{},{},{}]

//******************INSERT DATA TO genres TABLE*******************; 
    const sql_genre = `INSERT IGNORE INTO genres ( genre_name ) VALUES ("${key}")`;
     connection.query(sql_genre, (err, result)=>{
       if(err) throw err;
      // console.log(`${key} inserted to the  genres table`);
     }) 

        eventArrayInKey.map((item, index)=>{
          // for zipCode Table 
//// ********************* FORMAT DATA FOR zipCode TABLE*************************///

          const zip_code_value = item.postal_code; //right; 
         //******************INSERT DATA TO zipCode TABLE*******************; 
         const sql_zip = `INSERT IGNORE INTO zipCode ( zip_code ) VALUES ("${zip_code_value}")`;
           connection.query(sql_zip , (err, result)=>{
             if(err) throw err;
            // console.log(`${zip_code_value} inserted to the zipCode table`);
           }) 

  //// ********************* FORMAT DATA FOR venues TABLE*************************///

         const venue_name_value = item.venue_name; 
         const venue_address_value = item.venue_address;
         const venue_city_value  = item.city_name;
         const venue_state_value = item.region_name;
         const county_value = item.country_abbr;
         //zipcode_id = zipcode_id
         const longitude_value = item.longitude;
         const latitude_value = item.latitude; 
         //******************INSERT DATA TO venues TABLE*******************; 
         const sql_venue = `INSERT IGNORE INTO venues (venue_name, venue_address,city,state, county, zipcode_id, longitude, latitude ) VALUES ("${venue_name_value}","${venue_address_value}","${venue_city_value}","${venue_state_value}","${county_value}",(SELECT zip_id FROM zipCode WHERE zip_code = ${zip_code_value}), "${longitude_value}", "${latitude_value}")`;
        
        connection.query(sql_venue , (err, result)=>{
           if(err) throw err;
          // console.log(`${venue_name_value}  ${zip_code_value} inserted to the venues table`);
         }) 

  //// ********************* FORMAT DATA FOR performers TABLE*************************///
  let performer_name_value = null;
  let performer_bio_value = null;
  let performer_image_value = null;
  let performer_url_value = null;
        if(item.performers !== null){
            performer_name_value = item.performers.performer.name; 
            performer_bio_value = item.performers.performer.short_bio;
            performer_image_value = null; 
            performer_url_value = item.performers.performer.url;
         }else{
          performer_name_value  = 'NO performer data is listed';
         }
         //******************INSERT DATA TO performers TABLE*******************; 

         const sql_performers = `INSERT IGNORE INTO performers (performer_name, performer_bio, performer_image,performer_url) VALUES ("${performer_name_value}","${performer_bio_value}","${performer_image_value}","${performer_url_value}")`;
        
         connection.query(sql_performers , (err, result)=>{
            if(err) throw err;
          //  console.log(`${performer_name_value} inserted to the venues table`);
          }) 
        



//// ********************* FORMAT DATA FOR performers events *************************///
     const event_title_value = item.title; 
    //  console.log(event_title_value);
     const time = item.start_time.split(" ");
    //  console.log(time);
     const event_date_value = time[0]; 
    //  console.log(event_date_value);
     const event_start_time_value = time[1];
    //  console.log(event_start_time_value);
     const popularity_value = item.popularity; 
    //  console.log(popularity_value);
     const event_details_value = item.description;
    //  console.log(event_details_value)
     
//******************INSERT DATA TO  events Table *******************; 
      const sql_events = `INSERT IGNORE INTO events (event_title, event_date, event_start_time,venue_id,popularity,event_details,genre_id) VALUES ("${event_title_value}", '${event_date_value}', '${event_start_time_value}',(SELECT venue_id FROM venues WHERE venue_name = '${venue_name_value}'),  '${popularity_value}', '${event_details_value}',(SELECT genre_id FROM genres WHERE genre_name = '${key}'))`;

      // console.log(sql_events);
       connection.query(sql_events , (err, result)=>{
          if(err) throw err;
        }) 



//// ********************* FORMAT DATA FOR performers_events *************************///

 
//******************INSERT DATA TO  performers_events Table *******************; 
  const sql_performers_events  = `INSERT IGNORE INTO performers_events (performer_id,event_id) VALUES ((SELECT performer_id FROM performers WHERE performer_name = "${performer_name_value}"), (SELECT event_id FROM events WHERE event_title = "${event_title_value}"))`;

  // console.log(sql_performers_events);
   connection.query(sql_performers_events , (err, result)=>{
      if(err) throw err;
    }) 

//******************INSERT DATA TO  performers_events Table *******************; 













    //end of eventArrayInKey.map((item, index)
        })
  //end of for loop
    }

 //ending the test;   
}
test();














// axios.get('api/user-data', { start: '20180101', end: '20180101', genre:'classical'})


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

