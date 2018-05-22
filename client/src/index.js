///front end index.js
import React from 'react';
import '../node_modules/bootstrap3/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';




ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
