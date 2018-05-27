// import React, { Component } from 'react';
// import Event from './event_item';



// export default class Slider extends Component {

//     const allEvents = dummyData.map((item, index) => {
//         const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
//         const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//         const dateObject = Date.parse(item.start_time);
//         const date = new Date(dateObject);
//         const dayOfWeek = dayArray[date.getDay()];
//         const month = monthsArray[date.getMonth()];
//         const day = date.getDate();
//         const year = date.getFullYear();
//         const monthRender= `${month}`;
//         const dayRender= `${day}`;
//         const yearRender= `${year}`;
//         const dayOfWeekRender=`${dayOfWeek}`;
//         const eventDate = `${dayOfWeek}, ${month} ${day}`;
//         const time = date.toLocaleTimeString();
//         const timeString= time.toString();
//         const timeStringMinusThreeCharacters= timeString.slice(0,-3);
//         const EventTime= parseInt(timeStringMinusThreeCharacters);

//         if (item.image !== null) {
//             return(
//                 <Event title={item.title} venue_name={item.venue_name} dayOfWeekRender={dayOfWeekRender} monthRender={monthRender} dayRender={dayRender} event_date={eventDate} image={item.image.blackborder250.url} key={index} />
//             )
//         } else {
//             return(
//                 <Event title={item.title} venue_name={item.venue_name} dayOfWeekRender={dayOfWeekRender} monthRender={monthRender} dayRender={dayRender} event_date={eventDate} image={Corgi} key={index} />
//             )
//         }
        
//     constructor(props) {
//         super(props);

//         this.state={
//             slideCount:1
//         }
//     }


//     render() {
//         return (
//             <div className="slider">
           
//             </div>
//         );
//     }
// }