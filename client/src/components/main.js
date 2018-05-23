import React from 'react';
import Event from './event_item';
import dummyData from '../../helper/dummydata';
import CarouselInfo from './mainCarousel';
import EventDetailsSecondPage from './event_details_info';
import Top from './top';
import Corgi from '../assets/images/404corgi.jpg';
import Footer from './footer';


export default props => {
    
    const allEvents = dummyData.map((item, index) => {
        const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const dateObject = Date.parse(item.start_time);
        const date = new Date(dateObject);
        const dayOfWeek = dayArray[date.getDay()];
        const month = monthsArray[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        const eventDate = `${dayOfWeek}, ${month} ${day}, ${year}`;

        if (item.image !== null) {
            return(
                <Event title={item.title} venue_name={item.venue_name} event_date={eventDate} image={item.image.blackborder250.url} key={index} />
            )
        } else {
            return(
                <Event title={item.title} venue_name={item.venue_name} event_date={eventDate} image={Corgi} key={index} />
            )
        }
    
    const eventDetailsInfo = dummyData.map((item,index) => {
                <EventDetailsSecondPage title={item.title} venue_name={item.venue_name} time={item.start_time} image={item.image.blackborder250.url} key={index} />
        });
    });

    const carouselMainInfo = dummyData.map((item, index) => {
        return (
            <CarouselInfo key={index} title={item.title} venue_name={item.venue_name} time={item.start_time} />
        )
    })

    const top = dummyData.map((item, index) => {
        return (
            <Top key={index} city_name={item.city_name} />
        )
    })



    return (
        <div>
            <Top city_name={dummyData[0].city_name} />
            <CarouselInfo title={dummyData[0].title} image={dummyData[1].image.blackborder250.url} venue_name={dummyData[0].venue_name} time={dummyData[0].start_time} />
            {/* {carouselMainInfo} << TO POPULATE NON HARD CODED */}
            {allEvents}
            {/* <Event title={dummyData[1].title} image={dummyData[1].image.blackborder250.url}/><< HARD CODED EVENT */}

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            </div>
        </div>

    );
}
