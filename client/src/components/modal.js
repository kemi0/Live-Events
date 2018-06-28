import React, {Component} from 'react';
import EventTitle from './event_details_title';
import AboutEvent from './about_event_section';
import EventDetailsInfo from './event_details_info';
import Map from './google_maps';
import SecondPageSliderCarousel from './sliderCarousel';

class Modal extends Component {
   
    constructor (props){
        super(props);
    }

        render(){
        return(
            <div className="modal" style={{display: this.props.showOrHide}}>
                <div className="modal-content">
                    <div className="close" onClick={this.props.closemodal}>
                            X
                    </div>
                    <div>
                    <EventTitle event_title={this.props.event_title}/> 
                    <EventDetailsInfo event_date={this.props.event_date} title={this.props.title} venue_address={this.props.venue_address} event_image={this.props.event_image} venue_name={this.props.venue_name} time={this.props.start_time} />
                    </div>
                    <AboutEvent description ={this.props.description}/>
                    <Map lat={this.props.lat} lon={this.props.lon} />
                    <SecondPageSliderCarousel title={this.props.title} venue_address={this.props.venue_address} image={this.props.event_image} venue_name={this.props.venue_name} time={this.props.start_time}/>
                    
                        <button  className="text-center close-button btn" onClick={this.props.closemodal}>CLOSE</button>
    
               </div>
            </div>

        )
    }
}

export default Modal;