import React, { Component } from 'react';
// import SlideOne from './SlideOne';
// import SlideTwo from './SlideTwo';
// import SlideThree from './SlideThree';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
// import ImageExample from '../assets/images/artist_image_example.jpg';

//IMAGE COMMENTED OUT. MUST FIX ISSUE WITH RELATIVE POSITIONING ON "INFO-ROW", IT BREAKS WHEN IMAGE IS IN


class CarouselInfo extends Component {
    constructor(props) {
        super(props);

//         this.state = {
// 			slideCount: 0
// 		};

//     this.nextSlide = this.nextSlide.bind(this);
//     this.previousSlide = this.previousSlide.bind(this);

//     nextSlide() {
//         this.setState({ slideCount: this.state.slideCount + 1 })
//     }
  
//     previousSlide() {
//         this.setState({ slideCount: this.state.slideCount - 1 })
//     }
    }
    render() {
//      console.log(this.props)
    const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateObject = Date.parse(this.props.time);
    const date = new Date(dateObject);
    const dayOfWeek = dayArray[date.getDay()];
    const month = monthsArray[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const monthRender= `${month}`;
    const dayRender= `${day}`;
    const yearRender= `${year}`;
    const eventDate = `${dayOfWeek}, ${month} ${day}`;
    const time = date.toLocaleTimeString();
    const timeString= time.toString();
    const timeStringMinusThreeCharacters= timeString.slice(0,-3);
    const EventTime= parseInt(timeStringMinusThreeCharacters);
        return (       
                // <div className="container-fluid image carousel-container">
                // <div className="carousel">
                // { this.state.slideCount === 1 ? <SlideOne /> : null }
                // { this.state.slideCount === 2 ? <SlideTwo /> : null }
                // { this.state.slideCount === 3 ? <SlideThree /> : null }
                // {/* to the left to the left to the right to the right, now slide ..  */}
                // <RightArrow nextSlide={this.nextSlide} />
                // <LeftArrow previousSlide={this.previousSlide} />

                <div>
                    <div className="col-xs-6 text-center carousel-info">
                        <p className="artist-title">{this.props.title}</p>
                        <p className="time">{eventDate} @ {EventTime} PM</p>
                        <p className="venue">{this.props.venue_name}</p>
                    </div>
                        <div className="col-xs-6 text-center carousel-date-info">
                            {/* <div className="day-row"><p className="carousel-day">{dayRender} </p></div> */}
                            <div className="day-row"><p className="carousel-day">{dayRender}</p></div>
                            <div className="month-date">
                            {/* <div className="inter-box"><p className="carousel-month">{monthRender}</p></div> */}
                            <div className="inter-box"><p className="carousel-month">{monthRender}</p></div>
                            {/* <div className="inter-box"><p className="carousel-year">{yearRender}</p></div> */}
                            <div className="inter-box"><p className="carousel-year">{yearRender}</p></div>
                            </div>

                        </div>
                </div>
        )
    }
}



export default CarouselInfo;