//npm install --save react-router-dom
//npm install --save bootstrap3
//npm run dev
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import EventDetails from './components/event_details';
import { BrowserRouter as Router } from 'react-router-dom';




ReactDOM.render(
    <Router>
    <div>
        <App/>
        <EventDetails/>
    </div>
    </Router>,
    document.getElementById('root')
);
