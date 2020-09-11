import React, { useState, useEffect } from 'react';
import Button from './Button';

function App() {
  const [buttonValues, setButtonValues] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/').then((res) =>
      res.json().then(setButtonValues),
    );
  }, []);

  return (
    <div className='App'>
      {buttonValues &&
        buttonValues.map((value, index) => (
          <Button key={index} value={value} />
        ))}
    </div>
  );
}

export default App;
