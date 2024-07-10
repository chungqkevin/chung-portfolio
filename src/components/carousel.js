import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';
import SwipeableViews from 'react-swipeable-views';

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moved, setMoved] = useState(false);

  const handleChangeIndex = (index) => {
    setCurrentIndex(index);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleImageClick = (url) => {
    if (!moved) {
      window.open(url, '_blank'); // Open link in a new tab
    }
  };

  useEffect(() => {
    const downListener = () => {
      setMoved(false);
    };

    const moveListener = () => {
      setMoved(true);
    };

    const upListener = () => {
      if (moved) {
        //console.log('moved');
      } else {
        //console.log('not moved');
      }
    };

    document.addEventListener('mousedown', downListener);
    document.addEventListener('mousemove', moveListener);
    document.addEventListener('mouseup', upListener);

    return () => {
      document.removeEventListener('mousedown', downListener);
      document.removeEventListener('mousemove', moveListener);
      document.removeEventListener('mouseup', upListener);
    };
  }, [moved]);

  return (
    <div className="carousel">
      <SwipeableViews index={currentIndex} onChangeIndex={handleChangeIndex} enableMouseEvents>
        <div className={`slide ${currentIndex === 0 ? 'visible' : ''}`}>
          <img
            src="/images/pbj-blog.jpg"
            alt="blog page example"
            className="carousel-image"
            onClick={() => handleImageClick('https://www.blueowl.us')}
          />
        </div>
        <div className={`slide ${currentIndex === 1 ? 'visible' : ''}`}>
          <img
            src="/images/tenth-anni.jpg"
            alt="custom page example"
            className="carousel-image"
            onClick={() => handleImageClick('https://blueowl.us/blogs/news/how-to-soak-unsanforized-raw-denim')}
          />
        </div>
        <div className={`slide ${currentIndex === 2 ? 'visible' : ''}`}>
          <img
            src="/images/collection-ex.jpg"
            alt="collection page example"
            className="carousel-image"
            onClick={() => handleImageClick('https://www.blueowl.us/collections/new-arrivals')}
          />
        </div>
      </SwipeableViews>
      <div className="pagination">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
