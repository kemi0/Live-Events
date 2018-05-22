import React from 'react';




export default props => {
    return(
        <div className="container-fluid main-event-display-container">
            <div className="row">
                <div className="col-xs-6 main-event-image-container">
                   
                </div>
                <div className="col-xs-6 text-left main-event-info-container">
                    <div className="inner-info-container">
                        <div className="date">Date:</div>
                        <div className="time">Time:</div>
                        <div className="address">Address:</div>
                        <div className="address-info">Address:Info</div>
                    </div>
                </div>
            </div>
        </div>
    )
}