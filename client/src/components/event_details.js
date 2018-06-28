import React from 'react';
import AboutEvent from './about_event_section';
import Map from './google_maps';
import EventDetailsSecondPage from './event_details_info';
import Carousel from './sliderCarousel';


export default props =>{
        return(
            <div>
                <EventDetailsSecondPage  event_title={this.props.event_details}  image={dummyData[1].image.blackborder250.url} venue_name={dummyData[0].venue_name} start_time={dummyData[0].start_time} />,
                <AboutEvent description ={dummyData[3].description}/>
                <Map long={dummyData[0].longitude}/>
                <Carousel title={dummyData[0].title} address={dummyData[1].venue_address} image={dummyData[1].image.blackborder250.url} venue_name={dummyData[0].venue_name} time={dummyData[0].start_time}/>
            </div>
        )
    }

