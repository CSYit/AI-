import React from 'react';

const VlogDisplay: React.FC = () => {
  return (
    <section className="vlog-display">
      <h2>摄影旅拍 MV</h2>
      <p className="vlog-description">支持MV模板自定义</p>
      <div className="vlog-content">
        <video controls loop autoPlay muted className="vlog-video">
          <source src="/videos/vlog.mp4" type="video/mp4" />
          您的浏览器不支持视频标签。
        </video>
      </div>
    </section>
  );
};

export default VlogDisplay; 