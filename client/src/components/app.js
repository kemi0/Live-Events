import React, { Component } from 'react';
import '../assets/css/stylesheet.css';
import ReactDOM from 'react-dom';
import Main from './main';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Test from '../../helper/test'; // do not remove test
// import Header from './header';
import Footer from './footer';
import Menu from './menu.js'
// import Event from './event_item';
import SecondPageComponent from './event_details';
// import dummyData from '../../helper/dummydata';
import Event from './event_item';
import EventDetails from './event_details';
// import YTSearch from 'youtube-api-search';
import VideoDetail from './video_detail';

// YT search 
const API_KEY = 'AIzaSyCcDAVsmjsSKyf65jePkCftULWyIgT0mzo';


class App extends Component {
    constructor(props){
        super(props);


        this.state = { 
			events: [],
			filteredEvents: []
		}
	}

	handleSearch(term){
		if(term === ''){
			return this.setState({
				filteredEvents: []
			});
		}

		const filteredEvents = this.state.events.filter(event => {
			const genre = event.genre_name.toLowerCase();
			term = term.toLowerCase();

			return genre.indexOf(term) >= 0;
		});

		console.log('Filtered Events:', filteredEvents);

		this.setState({ filteredEvents });
	}

	setEvents(events){
		console.log('=============SET Events=============');
		this.setState({ events });
	}

	render(){
		const { events, filteredEvents } = this.state;
		let activeEvents = events;
		if(filteredEvents.length){
			activeEvents = filteredEvents;
		}

		return (
			<Router>
				<div>
					<Menu search={this.handleSearch.bind(this)} Menutitles = "Live Music App"/>  
					<div className="container-fluid">  
						<Route exact path="/" render={(props) => {
							return <Main {...props} events={activeEvents} addEvents={this.setEvents.bind(this)}/>
						}} />
						<Test /> 
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
