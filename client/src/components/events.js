import React, { Component } from 'react';
import DummyImage from '../assets/images/wale.jpg'

class Events extends Component {
    constructor (props){ 
        super (props);
        
    }


    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="event-container">
                    <div className="event-artist-photo">
                        <div className="img-con col-xs-4">
                            <img src={DummyImage} alt="livemusic"/>
                        </div>
                        <div className="col-xs-4">
                            <p className="title">{this.props.title}</p>
                            <p className="time">{this.props.time}</p>
                            <p className="venue_name">{this.props.venue_name}</p>
                        </div>
                        <button className="event-btn btn btn-primary col-xs-3 offset-1 ">
                            <div>
                                <p>Tues</p>
                            </div>
                            <div>
                                <p>19</p>
                            </div>
                            <div>
                                <p>Aug</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;