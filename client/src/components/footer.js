import React, { Component } from 'react';
import '../assets/css/footer.css';

class Footer extends Component {
    render() {
    
         return (
            
<footer className="flex-rw">
            <ul className="footer-list-top">
                <li>
                    <a href="#" className="generic-anchor footer-list-anchor">About Us</a>
                </li>
                    
                    {/* <li>
                        <a href="#" className="generic-anchor footer-list-anchor">Contact</a>
                    </li>
                    <li>
                        <a href="#" className="generic-anchor footer-list-anchor">FAQ</a>
                    </li> */}
            </ul>
            <div className="footer-social-section">
                    <div className ='social-icon'>
                        <a href="#"  title="Facebook" itemProp="significantLink"><i className="generic-anchor fa fa-facebook"></i></a>
                     </div>
                     <div className ='social-icon'> 
                          <a href="#"  title="Twitter" itemProp="significantLink"><i className="generic-anchor fa fa-twitter"></i></a>
                     </div> 
                     <div className ='social-icon'> 
                          <a href="#/"   title="Instagram" itemProp="significantLink"><i className="generic-anchor fa fa-instagram"></i></a>
                     </div> 
                     <div className ='social-icon'> 
                            <a href="#"  title="Youtube" itemProp="significantLink"><i className=" generic-anchor fa fa-youtube"></i></a>
                     </div> 
                 
            </div>
            <section className="footer-bottom-section flex-rw">
                        <div className="footer-bottom-wrapper">Irvine,CA</div> 
                        <div> ~2018 All Rights Reserved </div>
            </section>
</footer>
                      
        );
    }
}

export default Footer;

