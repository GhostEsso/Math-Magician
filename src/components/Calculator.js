import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalApp from './CallApp';

function Calculator() {
  const [val, setVal] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleCalculation = (buttonName) => {
    const updatedState = calculate(val, buttonName);
    setVal(updatedState);
  };

  return (
    <CalApp val={val}
     onButtonClick={handleCalculation} />
  );
}

export default Calculator;
