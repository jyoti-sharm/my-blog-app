import React from 'react';
import './Sidebar.css';

const Sidebar = ({ relatedArticles }) => {
  return (
    <aside className="sidebar">
      <h3>Also Read - <span className="highlight">Flutter</span></h3>
      <ul>
        {relatedArticles.map((article, index) => (
          <li key={index} className="article-item">
            <img src={article.imageUrl} alt={article.title} />
            <div className="article-content">
              <p className="article-title">{article.title}</p>
              <p className="article-date">{article.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
