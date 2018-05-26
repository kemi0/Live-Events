
///back-end index.js
const express = require('express');
const cors = require('cors');
//setup back end to handle React
const { resolve } = require('path');
//setup port for deploy else use 8000 as port;
const PORT = process.env.PORT || 9000;
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
      // console.log(outputObj); 
      const genresHasEvents =[];
      for(let key in outputObj){
//*********************** looping the outputObj  ****************//  
          //  console.log(key)
        
           const eventArrayBasedOnKey = outputObj[key];
           if(Number(eventArrayBasedOnKey) !== 0 ){
                  // *************** FORMAT DATA and INSERT TO genres TABLE**************//
                  console.log(`=========================${key}======================================`);
                  // console.log(eventArrayBasedOnKey);
                  const sql_genre = `INSERT IGNORE INTO genres ( genre_name ) VALUES ("${key}")`;
                  connection.query(sql_genre, (err, result)=>{
                          if(err) throw err;
                  });  
                  console.log(`----------------------- ${key} inserted to the  genres table -----------------`);
                  // ********** end of FORMAT DATA and INSERT TO genres TABLE*************// 


                  //*************** start of eventArrayBasedOnKey.map  ****************//                   
                  eventArrayBasedOnKey.map((item, index)=>{
                          //  console.log(`${index}: ${key} -> ${item} `);  

                          // ****** FORMAT DATA and INSERT TO zipCode TABLE*******//

                           const zip_code_value = item.postal_code; //right; 
                           const sql_zip = `INSERT IGNORE INTO zipCode ( zip_code ) VALUES ("${zip_code_value}")`;
                          //  console.log("INSERT ZIPCODE")
                           connection.query(sql_zip , (err, result)=>{
                                if(err) throw err;   
                                // console.log(`${zip_code_value} inserted`);                  
                                // console.log(`***********************${key} -> ${item} -> ${zip_code_value}  inserted to the  genres table *******************`);
                              }) 
                              // console.log(`## ${zip_code_value} inserted to table ##`);                  


                           // ******************&******************* FORMAT DATA and INSERT TO venues TABLE***********************************//
                                const venue_name_value = item.venue_name; 
                                const venue_address_value = item.venue_address;
                                const venue_city_value  = item.city_name;
                                const venue_state_value = item.region_name;
                                const county_value = item.country_abbr;
                                //zipcode_id = zipcode_id
                                const longitude_value = item.longitude;
                                const latitude_value = item.latitude; 

                                const sql_venue = `INSERT IGNORE INTO venues (venue_name, venue_address,city,state, county, zipcode_id, longitude, latitude ) VALUES ("${venue_name_value}","${venue_address_value}","${venue_city_value}","${venue_state_value}","${county_value}",(SELECT zip_id FROM zipCode WHERE zip_code = ${zip_code_value}), "${longitude_value}", "${latitude_value}")`;

                                connection.query(sql_venue , (err, result)=>{
                                  if(err) throw err;
                                  // console.log(`${venue_name_value}  ${zip_code_value} inserted to the venues table`);
                                }) 
                           //// ********************* FORMAT DATA and INSERT TO events  Table *************************///
                                let event_title_value = item.title; 
                                event_title_value = event_title_value.replace(/[`~!@#%^&*()|+\='"<>\{\}\[\]\\\/]/gi, ''); 
                                // console.log(`event in ${key} ${index} titile: ${event_title_value}`);
                                const time = item.start_time.split(" ");
                                const event_date_value = time[0];
                                const event_start_time_value = time[1];
                                const popularity_value = item.popularity;
                                let event_details_value;
                                if(item.description !== null){
                                  event_details_value = item.description;
                                  event_details_value = event_details_value.replace(/[`~!@#%^&*()|+\='"<>\{\}\[\]\\\/]/gi, ''); 
                                }else{
                                  event_details_value = 'No data';
                                }

                                console.log(`title::: ${event_title_value}`);
                                console.log(`details :::: ${event_details_value}`);
                                
                                const sql_events = `INSERT IGNORE INTO events (event_title, event_date, event_start_time,venue_id,popularity,event_details,genre_id) VALUES ("${event_title_value}", "${event_date_value}", "${event_start_time_value}",(SELECT venue_id FROM venues WHERE venue_name = "${venue_name_value}"),  "${popularity_value}", "${event_details_value}",(SELECT genre_id FROM genres WHERE genre_name = "${key}"))`;
                        
                                  connection.query(sql_events , (err, result)=>{
                                    if(err){
                                      console.log(`------> ${event_title_value} --------->  ${event_details_value}  <---------- `)

                                      throw err;
                                    } 
                                  }) 
                               
                  
                  

                //*************** end of eventArrayBasedOnKey.map  ****************//                   
                  })
           }else{
            //  console.log(`${key} doesn't have events`);
           }          
//*************** end of looping the outputObj  ****************//  
      }
// ********************end of test()******************************//
}
test();

    
           






 



// // //  //// ********************* FORMAT DATA FOR  images *************************///

//       let image_status_value = item.image;
//       let image_url_value;
//       let image_size_value;
//       let image_detail_value;
//       if(image_status_value !== null){
//         image_url_value =item.image.blackborder250.url;
//         // console.log(`this is the image url ******** ${image_url_value}`);
//         image_size_value ="blackborder250";
//         // console.log(image_size_value);
//         image_detail_value = 'Get Images';
//         // console.log(image_detail_value);
//       }else{
//         image_detail_value = 'No Images';
//         image_url_value = null;
//         image_size_value = null;

//       }

//       const sql_images = `INSERT IGNORE INTO images (image_url, image_size, event_id,image_detail) VALUES ('${image_url_value}',"${image_size_value}",(SELECT event_id FROM events WHERE event_title = "${event_title_value}"),"${image_detail_value}")`;
//       console.log("INSERT images")
//       connection.query(sql_images, (err,result)=>{
//         if(err) throw err;
//       })






// //   //// ********************* FORMAT DATA FOR performers TABLE*************************///
//   let performer_name_value = null;
//   let performer_bio_value = null;
//   let performer_image_value = null;
//   let performer_url_value = null;
//         if(item.performers !== null){
//             performer_name_value = item.performers.performer.name; 
//             performer_bio_value = item.performers.performer.short_bio;
//             performer_image_value = null; 
//             performer_url_value = item.performers.performer.url;
//          }else{
//           performer_name_value  = 'NO performer data is listed';
//          }
//          //******************INSERT DATA TO performers TABLE*******************; 

//          const sql_performers = `INSERT IGNORE INTO performers (performer_name, performer_bio, performer_image,performer_url) VALUES ("${performer_name_value}","${performer_bio_value}","${performer_image_value}","${performer_url_value}")`;
//          console.log("INSERT performers")
//          connection.query(sql_performers , (err, result)=>{
//             if(err) throw err;
//           //  console.log(`${performer_name_value} inserted to the venues table`);
//           }) 

 
// // //******************INSERT DATA TO  performers_events Table *******************; 
//   const sql_performers_events  = `INSERT IGNORE INTO performers_events (performer_id,event_id) VALUES ((SELECT performer_id FROM performers WHERE performer_name = "${performer_name_value}"), (SELECT event_id FROM events WHERE event_title = "${event_title_value}"))`;

//   // console.log(sql_performers_events);
//   console.log("INSERT performer_events")
//    connection.query(sql_performers_events , (err, result)=>{
//       if(err) throw err;
//     }) 

//     //end of eventArrayInKey.map((item, index)
//         })
  // //end of for loop
    // }

 //ending the test; 








































/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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

