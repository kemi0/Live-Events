import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);


        this.state = {
            term: '',
            placeholder: 'Search by Artist..',
            isSearchInputActive: false,
        };
        this.toggleSearchBar = this.toggleSearchBar.bind(this);
    }

    componentDidUpdate(){
        if (this.input) {
            this.input.focus();
        }
    }

    render() {
        const tempStyle = {
            color: '#000',
        };
        if (this.state.isSearchInputActive) {
            return (
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                            <input
                                placeholder={this.state.placeholder}
                                ref={e => this.input = e}
                                className="search_toolbar"
                                style={tempStyle}
                                value={this.state.term}
                                onChange={e => this.onInputChange(e.target.value)}
                            />
                    </div>
                </form>
            )
         } else {
            return <div className="fa fa-search search_toolbar" onClick={this.toggleSearchBar}></div>
         } 
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('Search Term:', this.state.term);
        this.toggleSearchBar();
    }

    onInputChange(term) {
        this.setState({ term });
    }
    toggleSearchBar() {
        if(this.state.isSearchInputActive){
             this.setState({ isSearchInputActive : false});
        } else {
          this.setState({ 
              isSearchInputActive : true,      
             });
        } 
        console.log('The state of this event:', this.state)
     }
}

export default SearchBar;