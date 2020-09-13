import React from 'react';

import { useRequest } from '../../hooks/useRequest';
import './Button.css';

export const Button = ({ value, setImages }) => {
  // const { response, makeRequest } = useRequest();
  console.log(value);

  // const getImages = (value) => {
  //   makeRequest(`http://localhost:5000/api/${value}`);
  //   console.log(response);
  // };

  return (
    <>
      <button className='button' onClick={() => setImages(value)}>
        {value}
      </button>
    </>
  );
};
