import React from 'react';
import { NavLink } from 'react-router-dom';
import EventTitle from './event_details_title';
import EventDetails from './event_details_info';
import SocialMedia from './event_socialmedia';
import AboutEvent from './about_event_section';
import Map from './google_maps';
import Youtube from './youtube_artist';
import Event from "./event_item";
import SuggestedEvent from './similar_event_suggestion';
// import SuggestedEvent from './similar_event_suggestion'
import Dots from './hard_coded_dots';
import Footer from './footer';



export default props =>{
    return(
        <div className="container">
           <EventTitle/>  
           <SocialMedia/>
           <AboutEvent/>
           <Map/>
           <Youtube/>
            <SuggestedEvent/>
           <Dots/>
           <Footer/>,
           
    </div>
    )
}