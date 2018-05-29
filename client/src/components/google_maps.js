import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
// import dummyData from '../../helper/dummydata';
// import axios from "axios";



const AnyReactComponent = ({ text }) => <div>{ text }</div>;
// const dummyDataCopy = dummyData.slice();

export default class Map extends Component {
        constructor( props){
                super(props);
        }
        
  static defaultProps = {
    center: { lat: 33.508914, lng:-86.79786},
    zoom: 13
  }

//   componentDidMount(){
//           this.getEventsFromDb();
//         }

//   getEventsFromDb(){
//         axios.get("/api/get-data").then(resp =>{
//           this.setState({

//           })
//         });

//         setTimeout(() => {
//                 const currentEvents = dummyDataCopy
//                 this.populateLocation(JSON.parse(JSON.stringify(currentEvents)));
//             }, 100)
//         }

// populateLocation(currentEvents){
//         this.setState({
//                 events: [...this.state.events, ...currentEvents]
//             });
// }

// showMoreEvents(){
//         if(this.state.events[0] == undefined){
//             console.warn('ask the database for more things')
//             return;
//         }
//         this.getEventsFromDb();
//     }


 
  
        render() {
                
        return (
        <div className="google-map-container">
                <GoogleMapReact
                        defaultCenter={ this.props.center }
                        defaultZoom={ 13 }/>
                <AnyReactComponent
                        lat={ '' }
                        lng={ '' }
                        text={ '' } />
               
                <GoogleMapReact/>
        </div>
                )
        }
}

<script async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKGIiarpxkIzDG50MYFC87jLuJzP0nzLk&callback=initMap">
    </script>