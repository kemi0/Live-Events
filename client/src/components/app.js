import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import { Route } from 'react-router-dom';
import Test from '../../helper/test'; // do not remove test
import Header from './header';
import Footer from './footer';
import Event from './event_item';
import EventDetails from './event_details';
import '../assets/css/stylesheet.css';
import YTSearch from 'youtube-api-search';
import VideoDetail from './video_detail';

// YT search 
const API_KEY = 'AIzaSyCcDAVsmjsSKyf65jePkCftULWyIgT0mzo';


// Keep here  





class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos: []}


        YTSearch(
            { key: API_KEY, term: 'kanye west'},
            async (data) => {
            await this.setState({videos: data})
        });
    }
    render() {

        const displayVideoDetail = () => {
            if (this.state.videos.length > 0){
                return <VideoDetail videos={this.state.videos}/>
            } else {
                return null;
            }
        }

        console.log("this is state:", this.state.videos)
        return(
            

            <div className="container-fluid"> 
                {/*  */}
                <Route exact path="/" component={Main} />
                <Route path="/eventDetails" component={EventDetails}/>         
            </div>
        ); 
    } 
}

export default App;
