import React from 'react';


export default props => {
    return(
    <div className="container-fluid">             
        <div className="top-display-text">
            <p>TOP</p>
        </div>
        <div className="container-fluid image carousel-container">
            <div className="row info-row">
                <div className="col-xs-6 text-center carousel-info">
                        <p className="artist-title">BTS</p>
                        <p className="time">9:00PM</p>
                        <p className="venue">Staples Center</p>
                </div>
                <div className="col-xs-6 text-center carousel-date-info">
                    <div className = "day-row"><p className="carousel-day">DAY</p></div>
                    <div className ="month-date">
                        <div className="inter-box"><p className="carousel-month">MONTH</p></div>
                        <div className="inter-box"><p className="carousel-month">19</p></div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 text-center">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                </div>
            </div>
        </div>
        <div className="event-display-text">
            <p>upcoming events</p>
        </div>
        <div className="container-fluid event-container">
            <div className="row">
                <div className="col-xs-4 event-artist-photo">
                    <img src="./images/artist_info_image.jpg"/>                    
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
        <div className="container-fluid event-container">
                <div className="row">
                    <div className="col-xs-4 event-artist-photo">
                        <img src="./images/artist_info_image.jpg"/>
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
        <div className="container-fluid event-container">
                    <div className="row">
                        <div className="col-xs-4 event-artist-photo">
                            <img src="./images/artist_info_image.jpg"/>
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
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 text-center show-more">
                    <button type = "button" className = "btn btn-success">Show More</button>
                </div>
            </div>
        </div>
        <div className="concerts-text">
            <p>concerts you may like</p>
        </div>
        <div className="container-fluid">
            <div className="row row-eq-height">
                <div className="col-xs-4 concert-suggestions-container">
                    {/* <img src="./images/artist_image_example.jpg"> */}
                </div>

                <div className="col-xs-4 concert-suggestions-container">
                </div>  
                
                <div className="col-xs-4 concert-suggestions-container">
                </div>   
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-3 suggested-event-name">
                    <p>EVENT</p>
                </div>
                <div className="col-xs-1 suggested-event-cal">
                        <p>AUG 19</p>
                </div>
                <div className="col-xs-3 suggested-event-name">
                        <p>EVENT</p>
                </div>
                <div className="col-xs-1 suggested-event-cal">
                        <p>AUG 19</p>
                    </div>
                <div className="col-xs-3 suggested-event-name">
                        <p>EVENT</p>
                </div>
                <div className="col-xs-1 suggested-event-cal">
                        <p>AUG 19</p>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 text-center">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                </div>
            </div>
        </div>
    </div>
    // </div> 
    )
}
