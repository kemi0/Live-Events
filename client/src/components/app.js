import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../assets/css/stylesheet.css';
import Main from './main';
import { Route } from 'react-router-dom';
import Test from '../../helper/test'; // do not remove test
import Header from './header';
import Footer from './footer';
import Event from './event_item';
import SecondPageComponent from './event_details';



class App extends Component {
render(){
        return(
            <div className="container-fluid">      
                    <Route exact path="/" component={Main} />
                    <Route path="/eventDetails" component={SecondPageComponent}/>
                    
            </div>
        );
    }
}

export default App;
