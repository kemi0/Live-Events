import React, {Component} from 'react';
import Corgi from '../assets/images/404corgi.jpg';
import ExampleImage1 from '../assets/images/artist_image_example.jpg';
import ExampleImage2 from '../assets/images/artist_info_image.jpg';

class CarouselSlider extends Component{
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
                <img src={ExampleImage1}/>
            </div>

            <div className="item">
                <img src={Corgi}/>
            </div>
            
            <div className="item">
                <img src={ExampleImage2}/>
            <div/>
            </div>

            
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
            </a>
        </div >
    </div>
</div>
        )
    }
}

export default CarouselSlider;
