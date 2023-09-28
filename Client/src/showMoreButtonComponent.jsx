//import libaries
import React from 'react';
import './index.css';

//show more button function
function showMoreButton({ onClick, buttonText }) {
    return <button className="show-more-button" onClick={onClick}>{buttonText}</button>;
  }
  
  export default showMoreButton;