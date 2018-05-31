import React, {Component} from 'react';
import Corgi from '../assets/images/404corgi.jpg';
import jazz404 from '../assets/images/concertImage1.jpg'
import CarouselInfo from './mainCarousel';


// this the carousel for the first page I dont know hwere to pass props between these two
class CarouselSlider extends Component{
    constructor(...props){
        super(...props);
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
                            <img src={this.props.events[14].event_image}/>
                            <CarouselInfo current_event={this.props.events[14]} />
                                
                            </div>    

                            <div className="item">
                                <img src={this.props.events[16].event_image}/>
                                <CarouselInfo current_event={this.props.events[16]} />
                            </div>

                            <div className="item">
                           
                                <img src={this.props.events[43].event_image}/>
                               
                                <CarouselInfo current_event={this.props.events[43]} />
                            </div>
                        
                     </div>
                    
                           
                        </div >
                </div>
        )
    }
}

export default CarouselSlider;
