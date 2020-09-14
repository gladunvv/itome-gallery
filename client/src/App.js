import React, { useEffect } from 'react';
import { Button } from './components/Button/Button';
import { Slider } from './components/Slider/Slider';
import { useRequest } from './hooks/useRequest';

import './App.css';

function App() {
  const [avaliableDirs, fetchAvaliavleDirs] = useRequest();
  const [imagesData, setImagesData] = useRequest();

  useEffect(() => {
    fetchAvaliavleDirs();
  }, [fetchAvaliavleDirs]);

  return (
    <div className='container flex jcc aic'>
      <div className='blocks-wrapper'>
        <div className='slider-block'>
          <Slider imagesData={imagesData} />
        </div>
        <div className='button-block split'>
          {avaliableDirs &&
            avaliableDirs.map((value, index) => (
              <Button key={index} onClick={setImagesData} value={value} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
