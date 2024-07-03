import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [selectedBudget, setSelectedBudget] = useState('');

  const handleBudgetClick = (budget) => {
    setSelectedBudget(budget);
  };

  return (
    <div className="contact-form">
      <h3>Let’s <span className="highlight">Connect</span> to help your Venture</h3>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email address" />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input type="tel" placeholder="Enter your mobile number" />
        </div>
        <div className="form-group">
          <label>What’s your Budget?</label>
          <div className="budget-options">
            {['Upto $5000', '$5000 to $10000', '$10000 to $25000', 'Over $25000', 'Can’t disclose'].map(budget => (
              <button
                type="button"
                key={budget}
                className={`budget-option ${selectedBudget === budget ? 'active' : ''}`}
                onClick={() => handleBudgetClick(budget)}
              >
                {budget}
              </button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea placeholder="Describe your needs in detail"></textarea>
        </div>
        <div className="form-group">
          <label>Attach any files you feel would be useful</label>
          <input type="file" />
        </div>
        <button type="submit">Give First Floor a Try</button>
      </form>
    </div>
  );
};

export default ContactForm;
