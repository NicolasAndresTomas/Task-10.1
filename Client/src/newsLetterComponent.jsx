import React, { useState } from 'react';
import './index.css';

function NewsletterComponent() {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Send a POST request to your backend endpoint to handle the email submission
      await fetch('http://localhost:3007/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      // Optionally, you can display a success message or perform other actions
      console.log('Email submitted successfully');
    } catch (error) {
      // Handle any errors that occur during the submission
      console.error('Error submitting email:', error);
    }
  };
  
  return (
    <div className="newsletter-container">
      <form onSubmit={handleSubmit} method="POST" action="http://localhost:3007/sendemail">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <button type="submit">SUBSCRIBE</button>
      </form>
    </div>
  );
}

export default NewsletterComponent;