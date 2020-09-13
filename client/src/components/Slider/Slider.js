import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import './Slider.css';

export const Slider = ({ imagesList }) => {
  return (
    <AwesomeSlider>
      {imagesList ? (
        imagesList.images.map((image, index) => (
          <div
            key={index}
            data-src={`http://localhost:5000/${imagesList.gallery}/${image}`}
          />
        ))
      ) : (
        <>
          <div className='default-slide'>
            <h1>Галлерея изображений</h1>
          </div>
        </>
      )}
    </AwesomeSlider>
  );
};
