import React, {Component} from 'react';
import Searchbar from './search_bar'

class SearBarPopUp extends Component{
    constructor(){
        super()
        this.state={
            isHidden:true
        }
    }

    toggleHidden(){
        this.setState({
            isHidden:!this.state.isHidden
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.toggleHidden.bind(this)}>
                Click HHEEERREEE
                </button>
                {!this.state.isHidden && <Child />}
            </div>
        )
    }

}

const Child = () => (
    <div className="searchbar">
    <h1><Searchbar/></h1>
    </div>
)

export default SearBarPopUp;
