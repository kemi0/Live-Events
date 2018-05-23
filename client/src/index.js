//npm install --save react-router-dom
//npm install --save bootstrap3
//npm run dev
import React from 'react';
import '../node_modules/bootstrap3/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import App from './components/app';
import EventDetails from './components/event_details';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Menu from './components/menu'



ReactDOM.render(
    <Router>

        <div>
            <Menu Menutitles="Live Music App"/>   
             {/* <Header /> */}
                <App />
                <Footer />
        </div>

    </Router>,

    document.getElementById('root')
);
