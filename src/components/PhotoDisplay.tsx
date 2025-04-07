import React, { useState } from 'react';

const PhotoDisplay: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const photos = [
    ['/images/photo1.jpg', '/images/photo2.jpg', '/images/photo3.jpg', '/images/photo4.jpg'],
    ['/images/photo5.jpg', '/images/photo6.jpg', '/images/photo7.jpg', '/images/photo8.jpg']
  ];

  const handlePrev = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="photo-display">
      <h2>AI 婚纱照展示</h2>
      <p className="photo-description">上百套新颖的摄影模板自由选择</p>
      <div className="photo-slider">
        <button className="slider-button prev" onClick={handlePrev}>
          <span>❮</span>
        </button>
        <div className="photo-container">
          <div 
            className="photo-wrapper"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {photos.map((group, groupIndex) => (
              <div key={groupIndex} className="photo-row">
                {group.map((photo, index) => (
                  <div key={index} className="photo-item">
                    <img 
                      src={photo} 
                      alt={`Photo ${groupIndex * 4 + index + 1}`} 
                      className="photo-image" 
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button className="slider-button next" onClick={handleNext}>
          <span>❯</span>
        </button>
      </div>
      <div className="slider-dots">
        {photos.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoDisplay; 