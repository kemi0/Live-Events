import React, { Component } from 'react';
// Install React CSS Transition Addon:
// npm install --save react-addons-css-transition-group
import Transition from 'react-addons-css-transition-group';
import Indicators from './indicators';
// import imageData from '../../assets/images/carousel';
import '../assets/css/carousel.css';
import Jazz404 from '../assets/images/concertImage1.jpg';
import axios from "axios";
import EventItem from './event_item';
// this the second page modal carousel 

class Carousel extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentIndex: 0,
            images: [],
            direction: 'next',
            transitionTime: 500,
            canClick: true
        }
    }

    componentDidMount(){
        // this.getImageData();
    }

    getImageData(){
    
    }

    enableClick(delay){
        setTimeout(() => {
            this.setState({ canClick: true })
        }, delay);
    }

    directToImage(index){
        const { canClick, transitionTime } = this.state;
        if (!canClick) return;

        this.setState({
            currentIndex: index,
            direction: 'fade',
            canClick: false
        }, () => this.enableClick(transitionTime));
    }

    changeImg(nextDirection = 'next'){
        const { canClick, currentIndex, images: { length }, transitionTime } = this.state;
        if(!canClick) return;

        if(nextDirection !== 'next' && nextDirection !== 'previous'){
            nextDirection = 'next'
        }
        
        let nextIndex = nextDirection === 'next' ? currentIndex + 1 : currentIndex - 1;

        if(nextIndex >= length) {
            nextIndex = 0;
        } else if(nextIndex < 0){
            nextIndex = length - 1;
        }
        
        this.setState({
            currentIndex: nextIndex,
            direction: nextDirection,
            canClick: false
        }, () => this.enableClick(transitionTime));
    }

    render(){
        if (!this.props.events) {
            return <div>Loading ...</div>
        } else {
         
    
            const { direction, currentIndex, images, transitionTime } = this.state;
    
            if(!images.length){
                return (
                    <div className="center-all carousel-container">
                        <h1 className="center">Loading Images</h1>
                    </div>
                )
            }
          
            return (
                <div className="center-all">
                    <h3 className="carousel-text center"></h3>
                    <button onClick={this.changeImg.bind(this, 'previous')}>Previous Image</button>
                    <div className="carousel-container">
                        <Transition
                            transitionName={`carousel-${direction}`}
                            transitionEnterTimeout={transitionTime}
                            transitionLeaveTimeout={transitionTime}
                        >
                            <img key={images[currentIndex].image ? images[currentIndex].image.blackborder250.url : corgi404} src={images[currentIndex].image ? images[currentIndex].image.blackborder250.url : corgi404} alt={''} className="carousel-img" />
                        </Transition>
                    </div>
                    <button onClick={this.changeImg.bind(this, 'next')}>Next Image</button>
                    <Indicators onClick={this.directToImage.bind(this)} count={images.length} current={currentIndex} />
                </div>
            );
        }
        
    }
}

export default Carousel;