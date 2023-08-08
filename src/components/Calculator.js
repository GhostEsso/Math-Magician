import './Calculator.css';
import CalApp from './CallApp';

const Calculator = () => (
  <CalApp />
);
Calculator.defaultProps = {
  num: 0,
};
export default Calculator;