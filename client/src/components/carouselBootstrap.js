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
        return(
                <div className="row">
                    <div id="carousel" className="carousel slide col-xs-12" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel" data-slide-to="1"></li>
                            <li data-target="#carousel" data-slide-to="2"></li>
                            <li data-target="#carousel" data-slide-to="3"></li>
                            <li data-target="#carousel" data-slide-to="4"></li>
                            <li data-target="#carousel" data-slide-to="5"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                               <img src={this.props.events[0].event_image}/>
                                <CarouselInfo current_event={this.props.events[0]} />
                            </div>

                            <div className="item">
                                <img src={this.props.events[1].event_image}/>
                                <CarouselInfo current_event={this.props.events[1]} />
                            </div>
                        
                            <div className="item">
                            <img src={this.props.events[2].event_image}/>
                            <CarouselInfo current_event={this.props.events[2]} />
                                
                            </div>    

                            <div className="item">
                                <img src={this.props.events[3].event_image}/>
                                <CarouselInfo current_event={this.props.events[3]} />
                            </div>

                            <div className="item">
                                <img src={this.props.events[4].event_image}/>
                                <CarouselInfo current_event={this.props.events[4]} />
                            </div>
                        
                        </div>
                    </div>
                </div>
        )
    }
}

export default CarouselSlider;
