import React from 'react';
import { NavLink } from 'react-router-dom';
import EventTitle from './event_details_title';
import AboutSection from './about_event_section';
import SocialMedia from './event_socialmedia';
import AboutEvent from './about_event_section';
import Youtube from './youtube_artist';
import Event from "./event_item";
import Footer from './footer';
import EventDetailsSecondPage from './event_details_info';
import dummyData from '../../helper/dummydata';
import Corgi from '../assets/images/404corgi.jpg';
import Map from './google_maps';
import Carousel from './sliderCarousel';

export default props =>{
    console.log("This is modal props: ", props);
    return(
        <div className="modal" style={{display: props.showOrHide}}>
            <div className="modal-content">
                <EventTitle title={props.title}/> 
                <EventDetailsSecondPage event_date={props.event_date} title={props.title} venue_address={props.venue_address} image={dummyData[1].image.blackborder250.url} venue_name={props.venue_name} time={props.start_time} />
                <Youtube/>
                <AboutEvent description ={props.description}/>
                <Map lat={props.lat} lon={props.lon} />
                <Carousel title={dummyData[0].title} venue_address={props.venue_address} image={dummyData[1].image.blackborder250.url} venue_name={dummyData[0].venue_name} time={props.start_time}/>
                {/* space for button */}
            </div>
        </div>

    )
}