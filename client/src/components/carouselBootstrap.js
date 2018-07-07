import React, {Component} from 'react';
import CarouselInfo from './mainCarousel';


class CarouselSlider extends Component{
    constructor(...props){
        super(...props);
        // this.state = {

        // };

        this.props.events.map( eventData => {
            if (eventData.event_image === "No Image"){
                eventData.event_image = "https://images.sk-static.com/images/media/profile_images/artists/465252/huge_avatar"
            }
        } )
    }

    componentDidMount() {
        $('#carousel').carousel({interval: 5000});
    }
    
    render(){
        //setting the limit of the carousel to hold less than 5 items
        //critical part in the search functionality for genre 
        const clippedEvents = this.props.events.slice(0, 5);
        const eventIndicators = clippedEvents.map((event, index) => (
            <li key={index} data-target="#carousel" data-slide-to={index} className={!index ? "active" : ""}></li>
        ));
        const eventSlides = clippedEvents.map((event, index) => (
            <div key={index} className={`item ${!index ? "active" : ""}`}>
                <img src={event.event_image}/>
                <CarouselInfo current_event={event} />
            </div>
        ));

        return(
                <div className="row">
                    <div id="carousel" className="carousel slide col-xs-12" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {eventIndicators}
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            {eventSlides}
                        </div>
                    </div>
                </div>
        )
    }
}

export default CarouselSlider;
