import React from 'react';



export default class Header extends React.Component {
    render() {
        return (
            <header>
            <div className="container-fluid">
                <div className="row row-eq-height">
                    <div className="col-xs-2 text-center left-nav nav">
                        <p>
                            <i className="fa fa-bars"></i>
                        </p>
                    </div>
                    <div className="col-xs-8 text-center center-nav nav">
                        <p>LOGO</p>
                    </div>
                    <div className="col-xs-2 text-center right-nav nav">
                        <p>
                            <i className="fa fa-search"></i>
                        </p>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}