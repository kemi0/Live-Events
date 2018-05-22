import React, { Component } from 'react';

class EventDetailsSecondPage extends Component {
    constructor(props){
        super(props);
    }

        render(){

        const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const dateObject = Date.parse(this.props.time);
        const date = new Date(dateObject);
        const dayOfWeek = dayArray[date.getDay()];
        const month = monthsArray[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        const eventDate = `${dayOfWeek}, ${month} ${day}, ${year}`;
        const time = date.toLocaleTimeString();

            return(
                <div className="container-fluid main-event-display-container">
                    <div className="row">
                        <div className="col-xs-6 main-event-image-container">
                        <img src={this.props.image} />
                        </div>
                        <div className="col-xs-6 text-left main-event-info-container">
                            <div className="inner-info-container">
                                <div className="date">Date: {eventDate}</div>
                                <div className="time">Time: {time}</div>
                                <div className="address">Address:{this.props.venue_name}</div>
                                <div className="address-info">{this.props.venue_address}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    export default EventDetailsSecondPage;