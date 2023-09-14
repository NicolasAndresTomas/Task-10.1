//import libaries
import React from 'react';
import './index.css';

//import images
import star from './images/star.png';

//card function
function card({ title, content, image, reviewScore }) {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{content}</p>
        <p><img src={star} className="star-icon" alt="star" /> {reviewScore}</p>
      </div>
    );
  }
  
  export default card;