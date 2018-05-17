import React from 'react';
import Footer from './footer';
import Events from './events';
import Header from './header';
import MainCarousel from "./mainCarousel";
import ShowMoreButton from "./showMoreButton";
import Test from '../../helper/test'; //do not remove Test.
import helperList from '../../helper/helperList';
import '../assets/css/stylesheet.css';


// THIS IS THE MAIN CAROUSEL FOR THE FIRST PAGE

const App = () => {
    return(
        <div>
            <Header/>
            <MainCarousel/>
            <Events/>
            <ShowMoreButton/>
            <Test/>
            <Footer />
        </div>
    );
}

export default App;
