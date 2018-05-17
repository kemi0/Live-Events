import React from 'react';
import '../assets/css/stylesheet.css';
import Header from './header';
import MainCarousel from "./mainCarousel";
import ShowMoreButton from "./showMoreButton";

// THIS IS THE MAIN CAROUSEL FOR THE FIRST PAGE

const App = () => {
    return(
        <div>
            <Header/>
            <MainCarousel/>
            <ShowMoreButton/>
        </div>
    );
}

export default App;
