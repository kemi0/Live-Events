import React, { Component } from "react";
import { NavLink } from 'react-router-dom';




class eventDetailsTitle extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="top-display-text">
                <p>{this.props.title}</p>
                </div>
            <div className="row">
                <div className="col-xs-12 text-right home-icon">
                    <NavLink to="/"><i className="fas fa-home fa-lg"><a href="#!"></a></i></NavLink>
                </div>
                </div>
            </div>
        )
    }
}


export default eventDetailsTitle;