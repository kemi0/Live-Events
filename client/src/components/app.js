import React from 'react';
import '../assets/css/stylesheet.css';
import Main from './main';
import { Route } from 'react-router-dom';
import Test from '../../helper/test'; // do not remove test
import Header from './header';
import Footer from './footer';
import Event from './event_item';
import EventDetails from './event_details';



const App = () => {
    return(
        <div className="container-fluid">      
                <Route exact path="/" component={Main} />
                <Route path="/eventDetails" component={EventDetails}/>
                 
        </div>
    );
}

export default App;
