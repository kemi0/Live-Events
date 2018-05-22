import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);


        this.state = {
            term: '',
            placeholder: 'Search by Artist..',
        };

    }

    componentDidMount(){
        this.input.focus();
    }

    render() {
        const tempStyle = {
            color: '#000',
        
        };


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
        );
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('Search Term:', this.state.term);
        this.props.toggle();
    }

    onInputChange(term) {
        this.setState({ term });
    }
}

export default SearchBar;