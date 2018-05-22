import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { isAbsolute } from 'path';
import SearchBar from './search_bar';



export default class Header extends Component {
    constructor(props){
        super(props);

    this.state = {
        isSearchInputActive: false,
        style: {
            display: null,
            width : null,
            height: null,
            color: null,
        } 
     }
     this.toggleSearchBar = this.toggleSearchBar.bind(this);
    }
    
    render() {
        const searchComponent = this.state.isSearchInputActive ? <SearchBar toggle={this.toggleSearchBar}/> : <div className="fa fa-search search_toolbar" onClick={this.toggleSearchBar}></div>
        return (
            <header>
            <div className="container-fluid">
                <div className="row row-eq-height">
                    <div className="col-xs-2 text-center left-nav nav">     
                         <NavLink to="/eventDetails" className="nav-link" activeClassName="active selected"> <i className="fa fa-bars"></i></NavLink>
                    </div>
                    <div className="col-xs-8 text-center center-nav nav">
                        <p>Live Music Finder</p>
                    </div>
                    <div className="col-xs-2 text-center right-nav nav">
                        { searchComponent }
                    </div>
                </div>
            </div>
        </header>
        )
    }

   toggleSearchBar() {
       if(this.state.isSearchInputActive){
            this.setState({ isSearchInputActive : false});
       } else {
         this.setState({ 
             isSearchInputActive : true, 
             style: {
                display: 'absolute',
                width : '25px',
                height: '40px',
                color: 'red', 
             }      
            });

       } 
       console.log('The state of this event:', this.state)
    }
}
//     HandleSearchClick(e){
        
        
// }