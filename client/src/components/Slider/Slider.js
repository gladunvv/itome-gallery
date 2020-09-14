import React from 'react';
import AwesomeSlider from 'react-awesome-slider';

import { BASE_URL } from '../../constants';

import 'react-awesome-slider/dist/styles.css';
import './Slider.css';

export const Slider = ({ imagesData }) => {
  return (
    <AwesomeSlider>
      {imagesData ? (
        imagesData.images.map((image, index) => (
          <div
            key={index}
            data-src={`${BASE_URL}/${imagesData.gallery}/${image}`}
          />
        ))
      ) : (
        <>
          <div className='default-slide'>
            <p>Тестовое задание</p>
            <h1>Галлерея изображений</h1>
            <span className='caption'>
              Сделанно с{' '}
              <span role='img' aria-label='heart'>
                ❤️
              </span>{' '}
              для #айтуми
            </span>
          </div>
        </>
      )}
    </AwesomeSlider>
  );
};
