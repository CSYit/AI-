import React from 'react';

const PhotoDisplay: React.FC = () => {
  return (
    <div className="photo-display">
      <h2>AI 婚纱照展示</h2>
      <div className="photo-content">
        <img src="/images/photo1.jpg" alt="Photo 1" className="photo-image" />
        <img src="/images/photo2.jpg" alt="Photo 2" className="photo-image" />
        <img src="/images/photo3.jpg" alt="Photo 3" className="photo-image" />
        <img src="/images/photo4.jpg" alt="Photo 4" className="photo-image" />
      </div>
    </div>
  );
};

export default PhotoDisplay; 