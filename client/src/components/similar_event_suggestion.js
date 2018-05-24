import React, { Component } from 'react';
import dummyData from '../../helper/dummydata';
import { Corgi } from '../assets/images/404corgi.jpg';

class SimilarEventSuggestionSlider extends Component {

    constructor(props){
        super(props);

        this.state = {
            slideCount: 1
        }
    }
      
        render(){

                const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
                const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const dateObject = Date.parse(this.props.time);
                const date = new Date(dateObject);
                const dayOfWeek = dayArray[date.getDay()];
                const month = monthsArray[date.getMonth()];
                const day = date.getDate();
                const year = date.getFullYear();
                const monthRender = `${month}`;
                const dayRender = `${day}`;
                const yearRender = `${year}`;
                const dayOfWeekRender = `${dayOfWeek}`;
                const eventDate = `${dayOfWeek}, ${month} ${day}`;
                const time = date.toLocaleTimeString();
                const timeString = time.toString();
                const timeStringMinusThreeCharacters = timeString.slice(0, -3);
                const EventTime = parseInt(timeStringMinusThreeCharacters);
        
               
            return (
                <div class="event-slider-container">
                    <button className="carousel-nav carousel-left-nav"></button>
                    <button className="carousel-nav carousel-right-nav"></button>
                    <h1>hi</h1>
                </div>
                )
        }
    }


export default SimilarEventSuggestionSlider;