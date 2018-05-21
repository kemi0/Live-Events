import React, { Component } from 'react';



class Top extends Component {
    constructor (props){ 
        super (props);   
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="top-display-text">
                    <p className="label">{this.props.city_name}</p>
                </div>
            </div>
                );
            }
        }

export default Top;