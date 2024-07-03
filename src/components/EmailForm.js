import React from 'react';
import './EmailForm.css';
import PaperPlaneImage from '../assets/images/image4.jpeg'; // Make sure to have this image in your assets

const EmailForm = () => {
  return (
    <div className="email-form">
      <div className="email-form-image-container">
        <img src={PaperPlaneImage} alt="Paper Plane" className="email-form-image" />
        <div className="vertical-line"></div>
      </div>
      <div className="email-form-content">
        <h3>Submit Your Email For a <span className="highlight">Free Demo</span></h3>
        <div className="email-form-input-wrapper">
          <input type="email" placeholder="Enter your Email Address" className="email-input" />
          <button type="submit" className="email-button">Get a Free Demo</button>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
