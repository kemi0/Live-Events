import React, { Component } from 'react';
// import ImageExample from '../assets/images/artist_image_example.jpg';

//IMAGE COMMENTED OUT. MUST FIX ISSUE WITH RELATIVE POSITIONING ON "INFO-ROW", IT BREAKS WHEN IMAGE IS IN

class CarouselInfo extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log(this.props)
        return (       
                <div className="container-fluid image carousel-container">
                    {/* <img id="Carousel-Image" src={ImageExample} alt="carousel_image" /> */}
                    <div className="row info-row">
                        <div className="col-xs-6 text-center carousel-info">
                            <p className="artist-title">{this.props.title}</p>
                            <p className="time">{this.props.time}</p>
                            <p className="venue">{this.props.venue_name}</p>
                        </div>
                        <div className="col-xs-6 text-center carousel-date-info">
                            <div className="day-row"><p className="carousel-day">DAY</p></div>
                            <div className="month-date">
                                <div className="inter-box"><p className="carousel-month">MONTH</p></div>
                                <div className="inter-box"><p className="carousel-month">19</p></div>
                            </div>

                        </div>
                    </div>
                </div>
        );
    }
}

export default CarouselInfo;