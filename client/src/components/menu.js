import React, { Component } from 'react';
import MenuLinks from './menu_links';
import SearchIcon from './search_icon';
import SearchBar from './search_bar';

class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            isSearchInputActive: false
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

    toggleSearchBar() {
        const { isSearchInputActive } = this.state;

        // Ternary equivalent to using if / else
        isSearchInputActive ? 
            this.setState({ isSearchInputActive: false }) : 
            this.setState({ isSearchInputActive: true });
        
        // if(this.state.isSearchInputActive){
        //         this.setState({ isSearchInputActive : false});
        // } else {
        //     this.setState({ 
        //         isSearchInputActive : true,      
        //     });
        // } 
    }

    render() {
        let menuStatus = this.state.isOpen ? 'isopen' : '';
        let { isSearchInputActive } = this.state;

        return (
            <div ref="root">
                <div className="menubar">
                    <div className="hambclicker" onClick={ this._menuToggle }></div>
                        <div id="hambmenu" className={ menuStatus }><span></span><span></span><span></span><span></span>
                    </div>

                        <div className="title">
                            <span>{this.props.Menutitles}</span>
                        </div>
                        {/* <SearchBar /> */}
                        <SearchIcon toggleSearchBar={ this.toggleSearchBar.bind(this) }/>

                        <MenuLinks menuStatus={menuStatus}/>
                        
                </div>
                { isSearchInputActive ? <SearchBar /> : <div></div> }
            </div>
        ) 
    }
}

export default Menu;
