import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            
<footer className="page-footer font-small">

    <div className="container-fluid text-center text-md-left">
        <div className="row">
            {/* <div className="col-sm-8">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns here to organize your footer content.</p>
            </div> */}
            <div className="col-sm-4">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li>
                        <i className="fas fa-home fa-lg"><a href="#!"></a></i>
                    </li>
                    <li>
                         <i className="fas fa-user fa-lg"><a href="#"></a></i> 
                    </li>
                    <li>
                        <i className="fas fa-music fa-lg"><a href="#!"></a></i>
                    </li>
                    {/* <li>
                        <i className=""><a href="#!"></a></i>
                    </li> */}
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright col-xs-12 text-center">
        © 2018 Copyright:
        <a href="#"> LiveMusicApp.com</a>
    </div>

</footer>
                      
        )
    }
}

export default Footer;