import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Button } from './components/Button/Button';
import { Slider } from './components/Slider/Slider';
import { useRequest } from './hooks/useRequest';

import './App.css';

function App() {
  const [buttonValues, setButtonValues] = useState([]);
  const [imagesList, setImagesList] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios('http://localhost:5000/api');
      setButtonValues(response.data);
    }
    fetchData();
  }, []);

  const setImages = async (value) => {
    const response = await axios(`http://localhost:5000/api/${value}`);
    setImagesList(response.data);
  };

  return (
    <div className='container flex jcc aic'>
      <div className='blocks-wrapper'>
        <div className='slider-block'>
          <Slider imagesList={imagesList} />
        </div>
        <div className='button-block split'>
          {buttonValues &&
            buttonValues.map((value, index) => (
              <Button key={index} setImages={setImages} value={value} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
