import React from 'react';
import '../assets/css/stylesheet.css';
import Main from './main';
import { Route } from 'react-router-dom';
import Test from '../../helper/test'; // do not remove test
import Header from './header';
import Footer from './footer';
import Events from './events';

// THIS IS THE MAIN CAROUSEL FOR THE FIRST PAGE

const App = () => {
    return(
        <div className="container-fluid">
            <Header/>
            <Main/>
            <Test/>    
            <Footer/>           
        </div>
    );
}

export default App;
