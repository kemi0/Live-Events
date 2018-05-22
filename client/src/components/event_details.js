import React from 'react';
import { NavLink } from 'react-router-dom';
import EventTitle from './event_details_title';
import AboutSection from './about_event_section';
import SocialMedia from './event_socialmedia';
import AboutEvent from './about_event_section';
import Map from './google_maps';
import Youtube from './youtube_artist';
import Event from "./event_item";
import EventTile from './event_details_title'
import SuggestedEvent from './similar_event_suggestion';
import Dots from './hard_coded_dots';
import Footer from './footer';
import EventDetailsSecondPage from './event_details_info';
import dummyData from '../../helper/dummydata';
import Corgi from '../assets/images/404corgi.jpg';


export default props =>{

        // const eventDetailsInfo = dummyData.map((item, index) => {
        //     const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        //     const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        //     let dateObject = Date.parse(item.start_time);
        //     let date = new Date(dateObject);
        //     let dayOfWeek = dayArray[date.getDay()];
        //     let month = monthsArray[date.getMonth()];
        //     let day = date.getDate();
        //     let year = date.getFullYear();

        //     if (item.image !== null) {
        //         return (
        //             <EventDetailsSecondPage title={item.title} venue_name={item.venue_name} week={dayOfWeek} month={month} date={day} year={year} time={item.start_time} image={item.image.blackborder250.url} key={index} />
        //         )
        //     } else {
        //         return (
        //             <EventDetailsSecondPage title={item.title} venue_name={item.venue_name} week={dayOfWeek} month={month} date={day} year={year} time={item.start_time} image={Corgi} key={index} />
        //         )
        //     }
        // );
        
        return(
            <div className="container">
                <EventTitle title={dummyData[0].title}/> 
                <EventDetailsSecondPage title={dummyData[0].title} address={dummyData[1].venue_address} image={dummyData[1].image.blackborder250.url} venue_name={dummyData[0].venue_name} time={dummyData[0].start_time} />,
                <Youtube/>
                <AboutEvent/>
                <Map/>
                <SuggestedEvent/>
                <Dots/>
            </div>
        )
    }
// }
