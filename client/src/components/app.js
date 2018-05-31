
import React, { Component } from 'react';
import '../assets/css/stylesheet.css';
import ReactDOM from 'react-dom';
import Main from './main';
import { Route } from 'react-router-dom';
import Test from '../../helper/test'; // do not remove test
import Footer from './footer';
import Menu from './menu.js'
import SecondPageComponent from './event_details';
import Event from './event_item';
import EventDetails from './event_details';
import VideoDetail from './video_detail';

// YT search 
const API_KEY = 'AIzaSyCcDAVsmjsSKyf65jePkCftULWyIgT0mzo';

            


class App extends Component {
render(){
        return(          
                <div className="container-fluid">  
                        <Route exact path="/" component={Main} />
                        <Route path="/eventDetails" component={SecondPageComponent}/>
                        <Test /> 
                 </div>
 
        ); 
    } 


}

export default App;
