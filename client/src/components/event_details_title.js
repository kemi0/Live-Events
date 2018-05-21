import React from "react";
import { NavLink } from 'react-router-dom';




export default props =>{
    return(
        <div className="container">
            <div className="top-display-text">
            <p>THE EVENT NAME</p>
            </div>
        <div className="row">
            <div className="col-xs-2 text-right home-icon">
                <NavLink to="/main"><i className="fas fa-home fa-lg"><a href="#!"></a></i></NavLink>
            </div>
            </div>
        </div>
        )
        }
