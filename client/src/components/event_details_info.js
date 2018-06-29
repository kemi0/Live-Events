import React, { Component } from 'react';

class EventDetailsSecondPage extends Component {
    constructor(props){
        super(props);
    }

        render(){
            return(
                <div className="row main-event-display-container">
                    <div className="col-xs-6 main-event-image-container">
                        <img src={this.props.event_image} />
                    </div>
                    <div className="col-xs-6 text-left main-event-info-container">
                        <div className="inner-info-container">
                                <div className="modal_date"> <p className="date-before">Date:</p>  {this.props.event_date}</div>
                                <div className="modal_time"> <p className="time-before">Time:</p> {this.props.time} PM</div>
                                <div className="modal_address"> <p className="addres-before">Address:</p>  {this.props.venue_name}</div>
                                <div className="modal_address-info">{this.props.venue_address}</div>
                        </div>
                    </div> 
                </div>
            )
        }
    }

    export default EventDetailsSecondPage;