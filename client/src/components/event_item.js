import React, { Component } from 'react';
import Modal from './modal';

class Event extends Component {

    constructor (props){    
        super (props);  
        
        this.state = {
            display: "none",
            isOpen:true,
            events:[]
        }
        this.handleModalClick= this.handleModalClick.bind(this)
        this.handleCloseModalClick= this.handleCloseModalClick.bind(this)
        this.modalToggle = this.modalToggle.bind(this);
    }
    modalToggle() {
        const { isSearchInputActive } = this.state;

        isSearchInputActive ? 
            this.setState({ isOpen: false }) : 
            this.setState({ isOpen: true });
    }

    handleModalClick(){
        this.setState({
            display: "block"
        });
    }

    handleCloseModalClick(){
        this.setState({
            display: "none"
        })
    }

    showMoreEvents(){
        if(this.state.events[0] == undefined){
            return;
        }
        this.getEventsFromDb();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="event-artist-photo">
                        <div className="img-con col-xs-4">
                        
                        <img src={this.props.image} onClick={this.handleModalClick}/>      
                        </div>
                        <div className="col-xs-4">
                            <p className="title">{this.props.event_title.substring(0, 20)+"..."}</p>
                            <p className="venue_name">{this.props.venue_name}</p>
                        </div>

                        <button className="event-btn btn btn-default col-xs-4" onClick={this.handleModalClick}>
                                <div>
                                    <p>{this.props.dayOfWeekRender}</p>
                                </div>
                                <div>
                                    <p>{this.props.monthRender}</p>
                                </div>
                                <div>
                                     <p>{this.props.dayRender}</p>
                                </div>
                        </button>
                    </div>
                    <Modal 
                    description={this.props.description} 
                    event_title={this.props.event_title} 
                    event_date={this.props.event_date} 
                    start_time={this.props.start_time} 
                    venue_name={this.props.venue_name} 
                    venue_address={this.props.venue_address} 
                    lat={this.props.latitude} lon={this.props.longitude} 
                    showOrHide={this.state.display} 
                    event_image={this.props.image} 
                    closemodal={this.handleCloseModalClick.bind(this)}/>              
            </div>
        );
   
    }
}


export default Event;