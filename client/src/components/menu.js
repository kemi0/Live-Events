import React, { Component } from 'react';
import MenuLinks from './menu_links';
import SearchBar from './search_bar';

class Menu extends Component {
    constructor(props){
        super(props);


        this.state = {
            isOpen: false
        }
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this); 
    }
    componentDidMount() {
        document.addEventListener('click', this._handleDocementClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this._handleDocumentClick, false);
    }
    _handleDocumentClick(e){
        if(!this.ref.root.contains(e.target) && this.state.isOpen === true) {
            this.setState({
                isOpen: false
            });
        }
    }
    _menuToggle(e) {
        e.stopPropagation();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        let menuStatus = this.state.isOpen ? 'isopen' : '';
        return (
            <div ref="root">
                <div className="menubar">
                    <div className="hambclicker" onClick={ this._menuToggle }></div>
                        <div id="hambmenu" className={ menuStatus }><span></span><span></span><span></span><span></span>
                        </div>
                        <div className="title">
                            <span>{this.props.Menutitles}</span>
                        </div>
                        <SearchBar/>
                        <MenuLinks menuStatus={menuStatus}/>
                        
                </div>
                
            </div>
           
        ) 
    }
}

export default Menu;