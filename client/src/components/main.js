import React from 'react';
import Events from './events';
import dummyData from '../../helper/dummydata';


export default props => {


    const allEvents = dummyData.map((item, index)=>{
        return(
            <Events title={item.title} venue_name={item.venue_name} time={item.start_time} key={index}/>
        )
    })


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
        {allEvents}
       {/* <Events title={dummyData[0].title}/> */}

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
