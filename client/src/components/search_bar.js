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

    handleSubmit(e){
        e.preventDefault();
    }

    onInputChange(term) {
        this.setState({ term });
    }

    render() {
        const tempStyle = {
            color: '#A9A9A9',
            fontSize:13,
        };

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div>
                    <input
                        placeholder={this.state.placeholder}
                        ref={e => this.input = e}
                        className="search_toolbar_popdown"
                        style={tempStyle}
                        value={this.state.term}
                        onChange={e => this.onInputChange(e.target.value)}
                    />
                </div>
            </form>
        )
    }
}

export default SearchBar;
