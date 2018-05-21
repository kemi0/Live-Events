import React from 'react';



export default props =>{
    return(
        <div className="container">
            <div className="row event-button-container">
                <div className="col-xs-6 button-container">

                    <button type="button" className="btn btn-success">Interest</button>
                    <button type="button" className="btn btn-success">Going</button>

                </div>
                <div className="col-xs-6 social-media-icon-event">

                    <i className="fa fa-cloud"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-car"></i>
                    <i className="fa fa-file"></i>
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </div>
    )
}