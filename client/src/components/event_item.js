import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Event extends Component {
    constructor (props){ 
        super (props);   
    }


    render() {
        return (
            <div className="container">
                <div className="event-container">
                    <div className="event-artist-photo">
                        <div className="img-con col-xs-4">
                        <NavLink to="/eventDetails" className="nav-link" activeClassName="active selected"><img src={this.props.image} /></NavLink>           
                        </div>
                        <div className="col-xs-4">
                            <p className="title">{this.props.title}</p>
                            <p className="time">{this.props.time}</p>
                            <p className="venue_name">{this.props.venue_name}</p>
                        </div>

                        <button className="event-btn btn btn-primary col-xs-3 offset-1 ">
                        <NavLink to="/event_details" className="nav-link" activeClassName="active selected">
                            <div>
                                <p>Tues</p>
                            </div>
                            <div>
                                <p>19</p>
                            </div>
                            <div>
                                <p>Aug</p>
                            </div>
                            </NavLink>
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}

export default Event;