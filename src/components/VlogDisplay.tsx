import React from 'react';

const VlogDisplay: React.FC = () => {
  return (
    <div className="vlog-display">
      <h2>AI 婚纱Vlog</h2>
      <div className="vlog-content">
        <video controls loop className="vlog-video">
          <source src="/videos/vlog.mp4" type="video/mp4" />
          您的浏览器不支持视频标签。
        </video>
        <video controls loop className="vlog-video">
          <source src="/videos/vlog2.mp4" type="video/mp4" />
          您的浏览器不支持视频标签。
        </video>
      </div>
    </div>
  );
};

export default VlogDisplay; 