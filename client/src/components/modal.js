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
    return(
        <div className="modal" style={{display: props.showOrHide}}>
            <div className="modal-content">
                <EventTitle title={dummyData[0].title}/> 
                <EventDetailsSecondPage title={dummyData[0].title} address={dummyData[1].venue_address} image={dummyData[1].image.blackborder250.url} venue_name={dummyData[0].venue_name} time={dummyData[0].start_time} />
                <Youtube/>
                <AboutEvent description ={dummyData[3].description}/>
                <Map lat={props.lat} lon={props.lon} />
                <Carousel title={dummyData[0].title} address={dummyData[1].venue_address} image={dummyData[1].image.blackborder250.url} venue_name={dummyData[0].venue_name} time={dummyData[0].start_time}/>
                {/* space for button */}
            </div>
        </div>

    )
}