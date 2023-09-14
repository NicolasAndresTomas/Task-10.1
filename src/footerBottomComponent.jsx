//import libaries
import React from 'react';
import './index.css';

//footer bottom function
function footerBottom() {
    return (
      <div className="footer-container">
        <div className="footer-columns-container">
          <div className="footer-column">
            <h4 className="footer-row-title">DEVLink</h4>
            <div className="footer-row">
              <a href="/" className="footer-link">Privacy Policy</a>
              <a href="/" className="footer-link">Terms</a>
              <a href="/" className="footer-link">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default footerBottom;