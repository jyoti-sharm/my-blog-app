import React, { useState } from 'react';
import Header from '../components/Header';
import BlogPost from '../components/BlogPost';
import Sidebar from '../components/Sidebar';
import ContactForm from '../components/ContactForm';
import './BlogView.css';
import Image from '../assets/images/image5.jpeg';
import Image2 from '../assets/images/image3.jpeg';
import Image1 from '../assets/images/image1.jpeg';
import Image0 from '../assets/images/image0.png';
import Image6 from '../assets/images/image6.jpeg';


// Dummy blog data
const blogData = {
  All: {
    title: 'Welcome to our Blog',
    author: 'Jyoti Sharma',
    date: '13-05-2014',
    content: 'Browse through our diverse set of articles on various technologies.',
    content2:'Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.',
    content4: `Flutter 3.22 and Dart 3.4 offer performance improvements and platform-specific refinements that bring us closer to that vision. We’re particularly excited to share more about our journey with Wasm, but you’ll find so much more, including an improved Impeller rendering engine, smoother visuals and reduced CPU usage on iOS, enhanced platform navigation with Android’s predictive back gesture, expanded monetization options with the Google Mobile Ads SDK, and a new powerful deep link validator in DevTools.
    Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.`,
    imageUrl: Image,
    image2: Image2,
    image1: Image1
  },
  AI: {
    title: 'The Future of Artificial Intelligence',
    author: 'Jyoti Sharma',
    date: '13-05-2014',
    content: 'Artificial Intelligence is revolutionizing the world. From healthcare to finance, AI is making a significant impact.',
    content2:'Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.',
    content4: `Flutter 3.22 and Dart 3.4 offer performance improvements and platform-specific refinements that bring us closer to that vision. We’re particularly excited to share more about our journey with Wasm, but you’ll find so much more, including an improved Impeller rendering engine, smoother visuals and reduced CPU usage on iOS, enhanced platform navigation with Android’s predictive back gesture, expanded monetization options with the Google Mobile Ads SDK, and a new powerful deep link validator in DevTools.
    Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.`,
    imageUrl: Image,
    image2: Image2,
    image1: Image1
  },
  'React.js': {
    title: 'Getting Started with React.js',
    author: 'Jyoti Sharma',
    date: '13-05-2014',
    content: 'React.js is a popular JavaScript library for building user interfaces. Learn how to get started with React and build powerful web applications.',
    content2:'Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.',
    content4: `Flutter 3.22 and Dart 3.4 offer performance improvements and platform-specific refinements that bring us closer to that vision. We’re particularly excited to share more about our journey with Wasm, but you’ll find so much more, including an improved Impeller rendering engine, smoother visuals and reduced CPU usage on iOS, enhanced platform navigation with Android’s predictive back gesture, expanded monetization options with the Google Mobile Ads SDK, and a new powerful deep link validator in DevTools.
    Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.`,
    imageUrl: Image,
    image2: Image2,
    image1: Image1,
    image6: Image6
  },
  'Node.js': {
    title: 'Why Node.js is Great for Backend Development',
    author: 'Jyoti Sharma',
    date: '13-05-2014',
    content: 'Node.js is a powerful JavaScript runtime built on Chrome\'s V8 engine. Discover why it\'s a popular choice for backend development.',
    imageUrl: Image,
    content2:'Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.',
    content4: `Flutter 3.22 and Dart 3.4 offer performance improvements and platform-specific refinements that bring us closer to that vision. We’re particularly excited to share more about our journey with Wasm, but you’ll find so much more, including an improved Impeller rendering engine, smoother visuals and reduced CPU usage on iOS, enhanced platform navigation with Android’s predictive back gesture, expanded monetization options with the Google Mobile Ads SDK, and a new powerful deep link validator in DevTools.
    Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.`,
    image2: Image2,
    image1: Image1,
    image6: Image6
  },
  JavaScript: {
    title: 'Understanding the basics of JavaScript for modern web development',
    author: 'Jyoti Sharma',
    date: '13-05-2014',
    content: 'JavaScript is a versatile programming language used for web development. It\'s essential for creating dynamic and interactive web pages.',
    content2:'Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.',
    content4: `Flutter 3.22 and Dart 3.4 offer performance improvements and platform-specific refinements that bring us closer to that vision. We’re particularly excited to share more about our journey with Wasm, but you’ll find so much more, including an improved Impeller rendering engine, smoother visuals and reduced CPU usage on iOS, enhanced platform navigation with Android’s predictive back gesture, expanded monetization options with the Google Mobile Ads SDK, and a new powerful deep link validator in DevTools.
    Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.`,
    imageUrl: Image,
    image2: Image2,
    image1: Image1,
    image6: Image6
  },
  Express: {
    title: 'Building Robust APIs with Express.js',
    author: 'Jyoti Sharma',
    date: '13-05-2014',
    content: 'Express.js is a minimal and flexible Node.js web application framework. Learn how to build robust APIs with Express.js.',
    content2:'Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.',
    content4: `Flutter 3.22 and Dart 3.4 offer performance improvements and platform-specific refinements that bring us closer to that vision. We’re particularly excited to share more about our journey with Wasm, but you’ll find so much more, including an improved Impeller rendering engine, smoother visuals and reduced CPU usage on iOS, enhanced platform navigation with Android’s predictive back gesture, expanded monetization options with the Google Mobile Ads SDK, and a new powerful deep link validator in DevTools.
    Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.`,
    imageUrl: Image,
    image2: Image2,
    image1: Image1
  },
  'Block chain': {
    title: 'Blockchain Technology: The Next Revolution',
    author: 'Jyoti Sharma',
    date: '13-05-2014',
    content: 'Blockchain technology is transforming the digital world. Explore its applications in various industries and its potential to change the future.',
    content2:'Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.',
    content4: `Flutter 3.22 and Dart 3.4 offer performance improvements and platform-specific refinements that bring us closer to that vision. We’re particularly excited to share more about our journey with Wasm, but you’ll find so much more, including an improved Impeller rendering engine, smoother visuals and reduced CPU usage on iOS, enhanced platform navigation with Android’s predictive back gesture, expanded monetization options with the Google Mobile Ads SDK, and a new powerful deep link validator in DevTools.
    Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.`,
    imageUrl: Image,
    image2: Image2,
    image1: Image1
  },
  Flutter: {
    title: 'How Flutter facilitates collaboration between designers and developers at L+R',
    author: 'Jyoti Sharma',
    date: '13-05-2014',
    content: `Flutter 3.22 and Dart 3.4 offer performance improvements and platform-specific refinements that bring us closer to that vision. We’re particularly excited to share more about our journey with Wasm, but you’ll find so much more, including an improved Impeller rendering engine, smoother visuals and reduced CPU usage on iOS, enhanced platform navigation with Android’s predictive back gesture, expanded monetization options with the Google Mobile Ads SDK, and a new powerful deep link validator in DevTools.
              Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.
              Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.
              Flutter 3.22 and Dart 3.4 offer performance improvements and platform-specific refinements that bring us closer to that vision. We’re particularly excited to share more about our journey with Wasm, but you’ll find so much more, including an improved Impeller rendering engine, smoother visuals and reduced CPU usage on iOS, enhanced platform navigation with Android’s predictive back gesture, expanded monetization options with the Google Mobile Ads SDK, and a new powerful deep link validator in DevTools.
              Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.
              Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.`,
    content2:'Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.',
    content3:'Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.',
    content4: `Flutter 3.22 and Dart 3.4 offer performance improvements and platform-specific refinements that bring us closer to that vision. We’re particularly excited to share more about our journey with Wasm, but you’ll find so much more, including an improved Impeller rendering engine, smoother visuals and reduced CPU usage on iOS, enhanced platform navigation with Android’s predictive back gesture, expanded monetization options with the Google Mobile Ads SDK, and a new powerful deep link validator in DevTools.
    Dart developers will enjoy streamlined API migration with dart fix directly in the IDE and new DevTools capabilities for advanced profiling. Plus, you can now preview the Vertex AI for Firebase Dart SDK, integrating AI-powered features with robust security measures.`,
    imageUrl: Image,
    image2: Image2,
    image1: Image1,
    image6: Image6,
  }
};


const BlogView = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const blogPost = blogData[selectedCategory];

  const relatedArticles = [
    { imageUrl: Image0, title: 'How Flutter facilitates collaboration between designers and developers at L+R...', date: '15 Feb 2024' },
    { imageUrl: Image0, title: 'How Flutter facilitates collaboration between designers and developers at L+R...', date: '15 Feb 2024' },
    { imageUrl: Image0, title: 'How Flutter facilitates collaboration between designers and developers at L+R...', date: '15 Feb 2024' },
    { imageUrl: Image0, title: 'How Flutter facilitates collaboration between designers and developers at L+R...', date: '15 Feb 2024' },
    { imageUrl: Image0, title: 'How Flutter facilitates collaboration between designers and developers at L+R...', date: '15 Feb 2024' },
    { imageUrl: Image0, title: 'How Flutter facilitates collaboration between designers and developers at L+R...', date: '15 Feb 2024' },
  ];

  return (
    <div className="blog-view">
      <Header onCategorySelect={handleCategorySelect} />
      <main>
        <section className="content">
          <BlogPost
            title={blogPost.title}
            content={blogPost.content}
            content2={blogPost.content2}
            content3={blogPost.content3}
            content4={blogPost.content4}
            imageUrl={blogPost.imageUrl}
            image2={blogPost.image2}
            image1={blogPost.image1}
            author={blogPost.author}
            date={blogPost.date}
          />
        </section>
        <aside className="sidebar">
          <Sidebar relatedArticles={relatedArticles} />
          <ContactForm />
        </aside>
      </main>
    </div>
  );
};

export default BlogView;
