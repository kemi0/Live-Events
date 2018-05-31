import React, { Component } from 'react';
import '../assets/css/footer.css';

class Footer extends Component {
    render() {
    
         return (
            
<footer className="flex-rw">
            <ul className="footer-list-top">
                <li>
                    <h4 className="footer-list-header">
                        About The Team
                    </h4>
                </li>
                <li>
                    <a href="#" className="generic-anchor footer-list-anchor">Get To Know Us</a>
                </li>
            </ul>
            <ul className="footer-list-top">
                    <li id="help">
                        <h4 className="footer-list-header">
                                Please Help Me 
                        </h4>
                    </li>
                    <li>
                        <a href="#" className="generic-anchor footer-list-anchor">Contact</a>
                    </li>
                    <li>
                        <a href="#" className="generic-anchor footer-list-anchor">FAQ</a>
                    </li>
                    <li>
                        <a href="#" className="generic-anchor footer-list-anchor">New Users</a>
                    </li>
            </ul>
            <section className="footer-social-section flex-rw">
                    <span className="footer-social-overlap footer-social-connect">
                    CONNECT <span className="footer-social-small">With</span>US
                    </span>
                    <span className="footer-social-overlap footer-social-icons-wrapper">
                        <a href="https://www.facebook.com/"  target="_blank" title="Facebook" itemProp="significantLink"><i className="generic-anchor fa fa-facebook"></i></a>
                        <a href="https://twitter.com/" target="_blank" title="Twitter" itemProp="significantLink"><i className="generic-anchor fa fa-twitter"></i></a>
                        <a href="http://instagram.com/"  target="_blank" title="Instagram" itemProp="significantLink"><i className="generic-anchor fa fa-instagram"></i></a>
                        <a href="https://www.youtube.com/"  target="_blank" title="Youtube" itemProp="significantLink"><i className=" generic-anchor fa fa-youtube"></i></a>
                        <a href="https://plus.google.com/"  target="_blank" title="Google Plus" itemProp="significantLink"><i className="generic-anchor fa fa-google-plus"></i></a>
                    </span>
            </section>
            <section className="footer-bottom-section flex-rw">
                    <div className="footer-bottom-wrapper">   
                        <i className="" role="">

                        </i> Irvine <address className="footer-address" role="company address">California, CA</address><span className="footer-bottom-rights"> - All Rights Reserved - </span>
                    </div>
            <div className="footer-bottom-wrapper">
                     <a href="/terms-of-use.html" className="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" className="generic-anchor" rel="nofollow">Privacy</a>
            </div>
    </section>
</footer>
                      
        );
    }
}

export default Footer;

