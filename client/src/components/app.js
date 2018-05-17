import React from 'react';
import '../assets/css/stylesheet.css';
import Header from './header';
import MainCarousel from "./mainCarousel";
import ShowMoreButton from "./showMoreButton";
import Test from './test';

// THIS IS THE MAIN CAROUSEL FOR THE FIRST PAGE

const App = () => {
    return(
        <div>
            <Header/>
            <MainCarousel/>
            <ShowMoreButton/>
            <Test/>
        </div>
    );
}

export default App;
