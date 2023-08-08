import './Calculator.css';
import CalApp from './CallApp';

function Calculator() {
  return <CalApp />;
}
Calculator.defaultProps = {
  num: 0,
};
export default Calculator;
