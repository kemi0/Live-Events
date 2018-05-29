//npm install --save react-router-dom
//npm install --save bootstrap3
//npm run dev
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import SecondPageComponent from './components/event_details';
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
=======
import '../node_modules/bootstrap3/dist/css/bootstrap.css';
// import Header from './components/header';
>>>>>>> 9391bfe015c23b584fa104ef0232a3ae6e25f0e2
import Footer from './components/footer';
import Menu from './components/menu';






ReactDOM.render(
    <Router>

        <div>
<<<<<<< HEAD
             
=======
            <Menu Menutitles="Live Music App"/>  
>>>>>>> 9391bfe015c23b584fa104ef0232a3ae6e25f0e2
                <App />
                
        </div>

    </Router>,

    document.getElementById('root')
);
