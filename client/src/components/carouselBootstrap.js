import React, {Component} from 'react';
import Corgi from '../assets/images/404corgi.jpg';
import CarouselInfo from './mainCarousel';
import dummyData from '../../helper/dummydata';


// this the carousel for the first page I dont know hwere to pass props between these two
class CarouselSlider extends Component{
    constructor(...props){
        super(...props);
    }

    componentDidMount() {
        $('#carousel').carousel({interval: 3000});
    }
    
    render(){
        return(
                <div className="row">
                    <div id="carousel" className="carousel slide col-xs-12" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel" data-slide-to="1"></li>
                            <li data-target="#carousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                {/* <img src={dummyData[1].image.blackborder250.url}/> */}
                                <img src={this.props.events[0].event_image}/>
                                {/* <CarouselInfo title={dummyData[3].title} venue_name={dummyData[3].venue_name} time={dummyData[3].start_time} /> */}
                                <CarouselInfo current_event={this.props.events[0]} />
                            </div>

                            <div className="item">
                                {/* <img src={dummyData[3].image.blackborder250.url}/> */}
                                <img src={this.props.events[1].event_image}/>
                                {/* <CarouselInfo title={dummyData[3].title} venue_name={dummyData[3].venue_name} time={dummyData[3].start_time} /> */}
                                {/* <CarouselInfo current_event={this.props.events[1]} /> */}
                            </div>
                        
                            <div className="item">
                                {/* <img src={dummyData[9].image.blackborder250.url}/> */}
                                <img src={Corgi}/>

                                {/* <CarouselInfo title={dummyData[9].title} venue_name={dummyData[9].venue_name} time={dummyData[9].start_time} /> */}
                                {/* <CarouselInfo current_event={this.props.events[2]} /> */}
                            </div> 
                        </div >
                    </div>
                </div>
        )
    }
}

export default CarouselSlider;
