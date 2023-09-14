//import libaries
import React from 'react';
import './index.css';

//import images
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import facebook from './images/facebook.png'


//footer function
function footerTop() {
    return (
      <div className="footer-container">
        <div className="footer-columns-container">
          <div className="footer-column">
            <h4 className="footer-title">For Dev</h4>
            <a href="/" className="footer-link">How it works</a>
            <a href="/" className="footer-link">How to create a profile</a>
            <a href="/" className="footer-link">Find jobs</a>
          </div>
  
          <div className="footer-column">
            <h4 className="footer-title">For Clients</h4>
            <a href="/" className="footer-link">How it works</a>
            <a href="/" className="footer-link">How to post a job</a>
            <a href="/" className="footer-link">Find dev</a>
          </div>
  
          <div className="footer-top-column">
            <h4 className="footer-row-title">Stay Connected</h4>
            <div className="footer-row">
              <a href="/" className="footer-link">
                <img src={instagram} alt="Instagram" className="social-icon" />
              </a>
              <a href="/" className="footer-link">
                <img src={twitter} alt="Twitter" className="social-icon" />
              </a>
              <a href="/" className="footer-link">
                <img src={facebook} alt="Facebook" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default footerTop;