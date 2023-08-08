import { useState } from 'react';
import calculate from '../deduction/calculate';

function CalApp() {
  const [val, setval] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const calcs = (e) => {
    const Newvalue = e.target.value;
    const evaluate = calculate(val, Newvalue);
    setval(evaluate);
  };
  const { total, next, operation } = val;
  return (
    <section className="Calc-container">
      <div className="row">
        <h2 className="input">{!total && !next && !operation ? 0 : [total, operation, next]}</h2>
      </div>
      <div className="row">
        <input type="button" value="AC" onClick={calcs} />
        <input type="button" value="+/-" onClick={calcs} />
        <input type="button" value="%" onClick={calcs} />
        <input type="button" value="÷" onClick={calcs} />
      </div>
      <div className="row">
        <input type="button" value="7" onClick={calcs} />
        <input type="button" value="8" onClick={calcs} />
        <input type="button" value="9" onClick={calcs} />
        <input type="button" value="x" onClick={calcs} />
      </div>
      <div className="row">
        <input type="button" value="4" onClick={calcs} />
        <input type="button" value="5" onClick={calcs} />
        <input type="button" value="6" onClick={calcs} />
        <input type="button" value="-" onClick={calcs} />
      </div>
      <div className="row">
        <input type="button" value="1" onClick={calcs} />
        <input type="button" value="2" onClick={calcs} />
        <input type="button" value="3" onClick={calcs} />
        <input type="button" value="+" onClick={calcs} />
      </div>
      <div className="row last-row">
        <input type="button" value="0" onClick={calcs} />
        <input type="button" value="." onClick={calcs} />
        <input type="button" value="=" onClick={calcs} />
      </div>
    </section>
  );
}
export default CalApp;
