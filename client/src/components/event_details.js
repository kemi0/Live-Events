import React from 'react';
import { NavLink } from 'react-router-dom';
import EventTitle from './event_details_title';
import AboutSection from './about_event_section';
import SocialMedia from './event_socialmedia';
import AboutEvent from './about_event_section';
import Map from './google_maps';
import Event from "./event_item";
import SuggestedEvent from './similar_event_suggestion';
import Dots from './hard_coded_dots';
import Footer from './footer';
import EventDetailsSecondPage from './event_details_info';
import dummyData from '../../helper/dummydata';
import Corgi from '../assets/images/404corgi.jpg';
import SimilarEventSuggestionSlider from './similar_event_suggestion';
// import Slider from './slider';
import videoDetail from './video_detail'


export default props =>{

        return(
            <div>
                <EventTitle title={dummyData[0].title}/> 
                <EventDetailsSecondPage title={dummyData[0].title} address={dummyData[1].venue_address} image={dummyData[1].image.blackborder250.url} venue_name={dummyData[0].venue_name} time={dummyData[0].start_time} />,
                {/* <videoDetails /> */}
                {/* {displayVideoDetail()} */}
                <VideoDetail viedo={ video } />
                <AboutEvent/>
                <Map/>
                <SimilarEventSuggestionSlider/>
                {/* <Slider/> */}
                <Dots/>
            </div>
        )
    }

