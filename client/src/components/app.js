
import React, { Component } from 'react';
import '../assets/css/stylesheet.css';
import ReactDOM from 'react-dom';
import Main from './main';
import { Route } from 'react-router-dom';
import Test from '../../helper/test'; // do not remove test
// import Header from './header';
import Footer from './footer';
import Menu from './menu.js'
// import Event from './event_item';
import SecondPageComponent from './event_details';
// import dummyData from '../../helper/dummydata';
import Event from './event_item';
import EventDetails from './event_details';
import VideoDetail from './video_detail';

class App extends Component {
render(){
        return(
            <div>
                <div>  
                    <Route exact path="/" component={Main} />
                    <Route path="/eventDetails" component={SecondPageComponent}/>
                    <Footer />                    
                </div>
            </div>
        ); 
    } 

}

export default App;
