//import libaries
import React from 'react';
import './index.css';

//news letter function
function newsletterComponent() {
    return (
      <div className="newsletter-container">
        <h2 className="newsletter-title">SIGN UP FOR OUR DAILY INSIDER</h2>
        <div className="newsletter-input-container">
          <input type="email" className="newsletter-input" placeholder="Enter your email" />
          <button className="newsletter-button">Subscribe</button>
        </div>
      </div>
    );
  }
  
  export default newsletterComponent;