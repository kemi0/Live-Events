const axios = require('axios');
const express = require('express');

// const getEvents = (callback)=>{
// const BASE_URL = 'http://api.eventful.com/json/events/search'
// const API_KEY = '?app_key=Zb7jwSS8MQppFwhH';

// axios.get(`${BASE_URL}${API_KEY}&location=birmingham&date=2018051700-2019010100&sort_order=date&category=music_blues&image_sizes=blackborder250,block100&page_size=1000&include=popularity`)
//       .then(response =>{
//         const result = JSON.stringify(response.data.events.event,null,3)
//         // console.log('data response from eventfull',result);
//         callback(response.data.events.event)
//       })
//       .catch(error =>{
//         console.log('Error message', error);
//       })
//   }


//   module.exports = getEvents