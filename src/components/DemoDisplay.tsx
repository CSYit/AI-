import React from 'react';

const DemoDisplay: React.FC = () => {
  return (
    <div className="demo-display">
      <h2>AI 婚纱照 Demo</h2>
      <div className="demo-content">
        <img src="https://via.placeholder.com/150" alt="Demo 1" className="demo-image" />
        <img src="https://via.placeholder.com/150" alt="Demo 2" className="demo-image" />
        <img src="https://via.placeholder.com/150" alt="Demo 3" className="demo-image" />
        <video controls className="demo-video">
          <source src="/public/videos/demo.mp4" type="video/mp4" />
          您的浏览器不支持视频标签。
        </video>
      </div>
    </div>
  );
};

export default DemoDisplay; 