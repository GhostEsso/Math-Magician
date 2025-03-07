import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalApp from './CallApp';
import RandomQuote from './RandomQuote';

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
    <section className="calculator-page">
      <div className="calculator-section">
        <h2>Let&apos;s do some math!</h2>
        <CalApp
          val={val}
          onButtonClick={handleCalculation}
        />
      </div>
      <div className="quote-section">
        <RandomQuote />
      </div>
    </section>
  );
}

export default Calculator;
