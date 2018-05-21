import React from 'react';
import { NavLink } from 'react-router-dom';
import EventTitle from './event_details_title';
import EventDetails from './event_details_info';
import SocialMedia from './event_socialmedia';
import AboutEvent from './about_event_section';
import Map from './google_maps';
import SuggestedEvent from './similar_event_suggestion'
import EventItem from './event_item';
import Dots from './hard_coded_dots';



export default props =>{
    return(
        <div className="container">
           <EventTitle/>
           
           <SocialMedia/>
           <AboutEvent/>
           <Map/>
           <EventItem/>
           <Dots/>,
           
    </div>
    )
}