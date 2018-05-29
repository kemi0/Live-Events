import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SecondPageComponent from './event_details';
import Modal from './modal';
import dummyData from '../../helper/dummyData'

const dummyDataCopy = dummyData.slice();

class Event extends Component {

    constructor (props){    
        super (props);  
        
        this.state = {
            display: "none",
            events:[]
        }
        this.handleModalClick= this.handleModalClick.bind(this)
        this.handleCloseModalClick= this.handleCloseModalClick.bind(this)
        this.showMoreEvents=this.showMoreEvents.bind(this)
    }

    handleModalClick(){
        this.setState({
            display: "block"
        });
    }

    handleCloseModalClick(){
        console.log("I'm supposed to close!")
        this.setState({
            display: "none"
        })
    }

    showMoreEvents(){
        if(this.state.events[0] == undefined){
            console.warn('ask the database for more things')
            return;
        }
        this.getEventsFromDb();
    }

    render() {
        const allEvents = this.state.events.map((item, index) => {
        const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dateObject = Date.parse(this.props.time);
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
    });



        return (
            <div className="container-fluid ">               
                    <div className="event-artist-photo">
                        <div className="img-con col-xs-4">
                        
                        <img src={this.props.image} onClick={this.handleModalClick}/>      
                        </div>
                        <div className="col-xs-4">
                            <p className="title">{this.props.title}</p>
                            <p className="time">{this.props.event_date}</p>
                            <p className="venue_name">{this.props.venue_name}</p>
                        </div>

                        <button className="event-btn btn btn-default col-xs-4" onClick={this.handleModalClick}>
                            {/* <NavLink to="/eventDetails" className="nav-link" activeClassName="active selected"> */}
                                <div>
                                    <p>{this.props.dayRender}</p>
                                </div>
                                <div>
                                    <p>{this.props.monthRender}</p>
                                </div>
                                <div>
                                    <p>{this.props.dayOfWeekRender}</p>
                                </div>
                            {/* </NavLink> */}
                        </button>
                    </div>
                    <Modal showOrHide={this.state.display} onClick={this.handleCloseModalClick}/>
                
            </div>
        );
    }
}

export default Event;