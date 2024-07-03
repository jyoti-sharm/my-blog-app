import React from 'react';
import './BlogPost.css';
import EmailForm from './EmailForm';

const BlogPost = ({ title, author, date, content, content2, content3, content4, imageUrl, image2, image1 }) => {
  const lines = content.split('\n');
  const lines2 = content4.split('\n');

  return (
    <div className="blog-post">
      
      <h2>{title}</h2>
      <p>{author} - {date}</p>
      <img src={imageUrl} alt={title} className="blog-post-image" />
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <img src={image2} alt={title} className="blog-post-image" />
        <p >{content2}</p>
      <img src={image1} alt={title} className="blog-post-image" />      
        <p>{content3}</p>
        <EmailForm />
        {lines2.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      
    </div>
  );
};

export default BlogPost;
