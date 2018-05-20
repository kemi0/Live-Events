import React from 'react';
import '../assets/css/stylesheet.css';
import Main from './main';
import { Route } from 'react-router-dom';
import Test from '../../helper/test'; // do not remove test
import Header from './header';
import Footer from './footer';
import Events from './events';
import EventDetails from './eventDetails';


const App = () => {
    return(
        <div className="container-fluid">
            <Header/>
            <Route path="/eventDetails" component={EventDetails}/>
            <Main/>
            <Test/>    
            <Footer/>           
        </div>
    );
}

export default App;
