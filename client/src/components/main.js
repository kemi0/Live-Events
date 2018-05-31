import React, { Component } from 'react';
import Event from './event_item';
import CarouselInfo from './mainCarousel';
import EventDetailsSecondPage from './event_details_info';
import Top from './top';
import Corgi from '../assets/images/404corgi.jpg';
import Jazz404 from '../assets/images/concertImage1.jpg';
import Footer from './footer';
import CarouselSlider from './carouselBootstrap';
import axios from "axios";


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
// getting data back from db 
    getEventsFromDb(){
        axios.get("/api/data").then(resp =>{
            this.populateEvents(resp.data);
            
        });
    }

 // showing all events
    populateEvents(currentEvents){
        this.setState({
            events: [...this.state.events, ...currentEvents]
        });
    }
        
// click the butten to show more events
    showMoreEvents(){
        if(this.state.events[0] == undefined){
            console.warn('ask the database for more things')
            return;
        }
        //after click the button and call db for more events
        this.getEventsFromDb();
    }

    render(){
        const { events } = this.state;
        //all events are here!
        console.log(events);
        


        if (!events.length) {

            console.log(`-------->>>>${events.length}h<<<------------`);
            // when events.length !=== 0
            return <div>Loading ...</div>
        } else{
            const allEvents = this.state.events.map((item, index) => {
                const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
                const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

                const dateObject = Date.parse(item.event_date);
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
                const eventTime= parseInt(timeStringMinusThreeCharacters);
                
                

                if (item.event_image !== "No Image") {
                    return(
                        //when event has image
                        <Event city_name = {item.city}  start_time={eventTime} description={item.description} title={item.event_title} venue_name={item.venue_name} venue_address={item.venue_address} dayOfWeekRender={dayOfWeekRender} monthRender={monthRender} dayRender={dayRender} event_date={eventDate} image={item.event_image} key={index} latitude={item.latitude} longitude={item.longitude}/>
                    )
                } else {
                    return(
                        //when is no image useing jazz404
                        <Event city_name = {item.city} start_time={eventTime} description={item.description} title={item.event_title} venue_name={item.venue_name} venue_address={item.venue_address} dayOfWeekRender={dayOfWeekRender} monthRender={monthRender} dayRender={dayRender} event_date={eventDate} image={Jazz404} key={index} latitude={item.latitude} longitude={item.longitude}/>
                    )
                }
            });

            const carouselMainInfo = this.state.events.map((item, index) => {
                if(item.popularity > 120){
                    console.log(`<------> popularity:${item.popularity}, image: ${item.event_image} <----------->`);
                }
                return (
                    <CarouselInfo start_time={item.event_start_time} event_title={item.event_title} venue_name={item.venue_name} venue_address={item.venue_address} latitude={item.latitude} longitude={item.longitude}/>
                )
            })

//////found city name but need to show the page/////
            console.log( ` This is the all Evens`, allEvents);
            const top = allEvents.map((item, index) => {
                console.log(index, item.props.city_name);
                return (
                    <Top key={index} city_name={item.props.city_name} />
                )
            });

            return (
                <div>
                    <Top city_name={this.props.city_name} />
                    <div className="container-fluid">
                        <CarouselSlider events={events}/>
                    </div>
             
                    {allEvents}
              
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
}

export default Main;