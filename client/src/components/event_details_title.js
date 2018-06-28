import React, { Component } from "react";


class EventDetailsTitle extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="top-display-text title">
                    <p>{this.props.event_title}</p>
                </div>
            <div className="row">
            <div className="col-xs-12 text-center home-icon">
                </div>
                </div>
            </div>
        )
    }
}


export default EventDetailsTitle;