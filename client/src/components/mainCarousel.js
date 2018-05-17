import React from 'react';
import ImageExample from '../assets/images/artist_image_example.jpg';

//IMAGE COMMENTED OUT. MUST FIX ISSUE WITH RELATIVE POSITIONING ON "INFO-ROW", IT BREAKS WHEN IMAGE IS IN

export default ()=>{
    return(
        <section>
        <div className="top-display-text">
        <p>TOP</p>
    </div>
    <div className="container-fluid image carousel-container">
        {/* <img id="Carousel-Image" src={ImageExample} alt="carousel_image" /> */}
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
    </section> 
    );
}