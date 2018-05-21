import React from 'react';
import '../assets/css/stylesheet.css';
import Main from './main';
import { Route } from 'react-router-dom';
import Test from '../../helper/test'; // do not remove test
import Header from './header';
import Footer from './footer';
import Event from './event_item';
import EventDetails from './eventDetails';


const App = () => {
    return(
        <div className="container-fluid">
            <Header/>
            <Route exact path="/" component={Main} />
            <Route path="/eventDetails" component={EventDetails}/>
            {/* <Test/>     */}
            <Footer/>           
        </div>
    );
}

export default App;
