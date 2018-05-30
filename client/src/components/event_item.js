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

    console.log("this is the thing", this.props)
        return (
            <div className="container-fluid">
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
                    <Modal lat={this.props.latitude} lon={this.props.longitude} showOrHide={this.state.display} onClick={this.handleCloseModalClick}/>              
            </div>
        );
    }
}

export default Event;