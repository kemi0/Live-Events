import React from 'react';
import '../assets/css/stylesheet.css';
import Main from './main';
import { Route } from 'react-router-dom';
import Test from '../../helper/test'; // do not remove test


// THIS IS THE MAIN CAROUSEL FOR THE FIRST PAGE

const App = () => {
    return(
        <div className="container-fluid">
        <Header/>
        <Route exact path="/" component={Main} />
        <Test/>    
        <Footer/>           
        </div>
    );
}

export default App;
