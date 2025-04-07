import React from 'react';
// import './Banner.css';

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="slideshow">
        <div className="slide" style={{ backgroundImage: 'url(/demo/demo1.jpg)' }}></div>
        <div className="slide" style={{ backgroundImage: 'url(/demo/demo2.jpg)' }}></div>
      </div>
      <h1>AI 婚纱摄影</h1>
    </div>
  );
};

export default Banner; 