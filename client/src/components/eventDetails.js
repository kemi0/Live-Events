import React from 'react';



// SECOND PAGE NEEDS TO BE BROKEN DOWN FURTHER INTO COMPONENTS
export default props =>{
    return(
        <div className="container">
            <div className="top-display-text">
            <p>THE EVENT NAME</p>
        </div>

       
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

        <div className="container-fluid">
            <div className="row youtube-container">
                <div className="col-xs-12">
                </div>
            </div>
        </div>

       
        <div className="container-fluid">
            <div className="row text-center about-event-display-text">
                <div className="col-xs-12">
                    <p>ABOUT THIS EVENT</p>
                </div>
            </div>
        </div>

      
        <div className="container-fluid">
            <div className="row text-center about-event-text">
                <div className="col-xs-12">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptates corrupti qui illo, recusandae architecto
                        fugit atque, ratione dolorem sapiente accusantium numquam dicta? Sunt quod in placeat laudantium deleniti
                        nesciunt!</p>
                </div>
            </div>
        </div>

  
        <div className="container-fluid">
            <div className="row text-center google-map-container">
                <div className="col-xs-12">
                    <p>MAP</p>
                </div>
            </div>
        </div>

   
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

       
        <div className="container-fluid">
            <div className="row text-center empty-container">
            </div>
        </div>
    </div>
    )
}