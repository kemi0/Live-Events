import React from 'react';
import '../assets/css/stylesheet.css';
import Main from './main';
import { Route } from 'react-router-dom';
import Test from '../../helper/test'; // do not remove test
import Header from './header';
import Footer from './footer';

// THIS IS THE MAIN CAROUSEL FOR THE FIRST PAGE

const App = () => {
    return(
        <div className="container-fluid">
            <Header/>
            <Test/>    
            <Footer/>           
        </div>
    );
}

export default App;
