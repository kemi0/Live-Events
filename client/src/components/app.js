import React from 'react';
import Footer from './footer';
import Events from './events';
import Header from './header';
import MainCarousel from "./mainCarousel";
import ShowMoreButton from "./showMoreButton";
import Test from './test';
import '../assets/css/stylesheet.css';


// THIS IS THE MAIN CAROUSEL FOR THE FIRST PAGE

const App = () => {
    return(
        <div>
            <Header/>
            <MainCarousel/>
            <ShowMoreButton/>
            <Test/>
            <Footer />
        </div>
    );
}

export default App;
