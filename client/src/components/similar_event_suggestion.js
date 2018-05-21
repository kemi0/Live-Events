import React from 'react';


export default props => {
    return(
<div>
    <div className="container-fluid">
        <div className="row text-center about-event-display-text">
            <div className="col-xs-12">
                <p>SIMILAR EVENTS</p>
            </div>
        </div>
    </div>

    
    <div className="container-fluid event-container">
        <div className="row">
            <div className="col-xs-4 event-artist-photo">
                {/* <img src="./images/artist_info_image.jpg"/> */}
            </div>
            <div className="col-xs-5 text-center event-info">
                <div className="event-text">
                    <p className="event-name">Event Name</p>
                    <p className="event-time">Time</p>
                    <p className="event-location">Location</p>
                </div>
            </div>
            <div className="col-xs-3 text-center calendar-info">
                
                    <p className="event-day">Day</p>
                    <p className="event-date">Date</p>
                    <p className="event-time">Time</p>
                    
            </div>
        </div>
    </div>
</div>
    )
}