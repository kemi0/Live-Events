import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Event extends Component {

    constructor (props){    
        super (props);   
        // let startTime = this.props.time;
        // this.day = Date.parse(startTime);
        // this.new_day = new Date();
        // const month = this.new_day.getMonth();
        // const day_of_week = this.new_day.getDay();
        // const day_of_month = this.new_day.getDate();
        // const year = this.new_day.getFullYear();
        
        // const newthang = `${this.new_day.getFullYear()} ${this.new_day.getMonth()} ${this.new_day.getDate()}`;
        // console.log(this.props)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className=" row event-container">
                    <div className="event-artist-photo">
                        <div className="img-con col-xs-4">
                        <NavLink to="/eventDetails" className="nav-link" activeClassName="active selected"><img src={this.props.image} /></NavLink>           
                        </div>
                        <div className="col-xs-4">
                            <p className="title">{this.props.title}</p>
                            <p className="time">{this.props.event_date}</p>
                            <p className="venue_name">{this.props.venue_name}</p>
                        </div>

                        <button className="event-btn btn btn-default col-xs-3 offset-1 ">
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