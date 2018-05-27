import React, { Component } from 'react';
import Event from './event_item';
import dummyData from '../../helper/dummydata';
import CarouselInfo from './mainCarousel';
import EventDetailsSecondPage from './event_details_info';
import Top from './top';
import Corgi from '../assets/images/404corgi.jpg';
import Footer from './footer';
import CarouselSlider from './carouselBootstrap';
// import ShowMoreButton from './showMoreButton';
import axios from "axios";

const dummyDataCopy = dummyData.slice();

class Main extends Component {

    constructor (props){
        super(props);

        this.state = {
            events: []
        };

        this.showMoreEvents = this.showMoreEvents.bind(this)
    }

    componentDidMount(){
        this.getEventsFromDb();
    }

    getEventsFromDb(){
        axios.get("/api/get-data").then(resp =>{
            console.log(resp.data);
            this.setState({
                //set state to whatever data is coming through
            })
        });

        setTimeout(() => {
            const currentEvents = dummyDataCopy.splice(0, 5);
            this.populateEvents(JSON.parse(JSON.stringify(currentEvents)));
        }, 100)
    }

    populateEvents(currentEvents){
        this.setState({
            events: [...this.state.events, ...currentEvents]
        });
    }
        

    showMoreEvents(){
        if(this.state.events[0] == undefined){
            console.warn('ask the database for more things')
            return;
        }
        this.getEventsFromDb();
    }

    render(){
        const allEvents = this.state.events.map((item, index) => {
            const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            const dateObject = Date.parse(item.start_time);
            const date = new Date(dateObject);
            const dayOfWeek = dayArray[date.getDay()];
            const month = monthsArray[date.getMonth()];
            const day = date.getDate();
            const year = date.getFullYear();
            const monthRender= `${month}`;
            const dayRender= `${day}`;
            const yearRender= `${year}`;
            const dayOfWeekRender=`${dayOfWeek}`;
            const eventDate = `${dayOfWeek}, ${month} ${day}`;
            const time = date.toLocaleTimeString();
            const timeString= time.toString();
            const timeStringMinusThreeCharacters= timeString.slice(0,-3);
            const EventTime= parseInt(timeStringMinusThreeCharacters);

            if (item.image !== null) {
                return(
                    <Event title={item.title} venue_name={item.venue_name} dayOfWeekRender={dayOfWeekRender} monthRender={monthRender} dayRender={dayRender} event_date={eventDate} image={item.image.blackborder250.url} key={index} />
                )
            } else {
                return(
                    <Event title={item.title} venue_name={item.venue_name} dayOfWeekRender={dayOfWeekRender} monthRender={monthRender} dayRender={dayRender} event_date={eventDate} image={Corgi} key={index} />
                )
            }

        // const eventDetailsInfo = dummyData.map((item,index) => {
        //             <EventDetailsSecondPage title={item.title} venue_name={item.venue_name} time={item.start_time} image={item.image.blackborder250.url} key={index} />
        //     });
        });

        // const carouselMainInfo = dummyData.map((item, index) => {
        //     return (
        //         <CarouselInfo key={index} title={item.title} venue_name={item.venue_name} time={item.start_time} />
        //     )
        // })
        

        const top = allEvents.map((item, index) => {
            return (
                <Top key={index} city_name={item.city_name} />
            )
        })
        
        

        return (
            
            <div>
                
                <Top city_name={dummyData[0].city_name} />
                <CarouselSlider/>
                {/* <CarouselInfo title={dummyData[0].title} image={dummyData[1].image.blackborder250.url} venue_name={dummyData[0].venue_name} time={dummyData[0].start_time} /> */}
                {/* {carouselMainInfo} << TO POPULATE NON HARD CODED */}
                {allEvents}
                {/* <Event title={dummyData[1].title} image={dummyData[1].image.blackborder250.url}/><< HARD CODED EVENT */}
                {/* <ShowMoreButton/> */}
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-xs-12 text-center">
                        <button className="show-more-button btn" onClick={this.showMoreEvents}>SHOW MORE BUTTON</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }  

}

export default Main;