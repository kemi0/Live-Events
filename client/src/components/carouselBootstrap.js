import React, {Component} from 'react';
import Corgi from '../assets/images/404corgi.jpg';
import ExampleImage1 from '../assets/images/artist_image_example.jpg';
import ExampleImage2 from '../assets/images/artist_info_image.jpg';
import CarouselInfo from './mainCarousel';
import dummyData from '../../helper/dummydata';

class CarouselSlider extends Component{
    constructor(...props){
        super(...props);
    }
    
    render(){

        return(

<div className="container-fluid">
    <div id="Carousel" className="carousel slide" data-ride="carousel">
        
        <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>


                        <div className="carousel-inner">
                        <div className="item active">
                            <img src={dummyData[1].image.blackborder250.url}/>
                            <CarouselInfo title={dummyData[1].title} venue_name={dummyData[1].venue_name} time={dummyData[1].start_time} />

                        </div>

                        <div className="item">
                            <img src={dummyData[3].image.blackborder250.url}/>
                            <CarouselInfo title={dummyData[3].title} venue_name={dummyData[3].venue_name} time={dummyData[3].start_time} />
                        </div>
                        
                        <div className="item">
                            <img src={dummyData[9].image.blackborder250.url}/>
                            <CarouselInfo title={dummyData[9].title} venue_name={dummyData[9].venue_name} time={dummyData[9].start_time} />
                        <div/>
                        </div>

                        
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only"></span>
                        </a>
                    </div >
                </div>
            </div>
        )
    }
}

export default CarouselSlider;
