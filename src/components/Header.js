import React from 'react';
import './Header.css';

const Header = ({ onCategorySelect }) => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="nav-item" onClick={() => onCategorySelect('All')}>All</li>
          <li className="nav-item" onClick={() => onCategorySelect('Flutter')}>Flutter</li>
          <li className="nav-item" onClick={() => onCategorySelect('AI')}>AI</li>
          <li className="nav-item" onClick={() => onCategorySelect('React.js')}>React.js</li>
          <li className="nav-item" onClick={() => onCategorySelect('Node.js')}>Node.js</li>
          <li className="nav-item" onClick={() => onCategorySelect('JavaScript')}>JavaScript</li>
          <li className="nav-item" onClick={() => onCategorySelect('Express')}>Express</li>
          <li className="nav-item" onClick={() => onCategorySelect('Block chain')}>Block chain</li>
          <li className="nav-item" onClick={() => onCategorySelect('Flutter')}>Flutter</li>
        </ul>
      </nav>
      <div className="indicator-dots">
        <span className="dot red"></span>
        <span className="dot blue"></span>
        <span className="dot green"></span>
        <span className="dot grey"></span>
      </div>
    </header>
  );
};

export default Header;
