import React from 'react';
import PropTypes from 'prop-types';

function CalApp({ val, onButtonClick }) {
  const { total, next, operation } = val;

  const calcs = (e) => {
    const Newvalue = e.target.value;
    onButtonClick(Newvalue);
  };

  return (
    <section className="Calc-container">
      <div className="row">
        <h2 className="input">{!total && !next && !operation ? 0 : `${total || ''} ${operation || ''} ${next || ''}`}</h2>
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

CalApp.propTypes = {
  val: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default CalApp;
