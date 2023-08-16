import operate from '../logic/operate';
import Big from 'big.js';


describe('operate function', () => {
  test('performs addition correctly', () => {
    const result = operate('5', '3', '+');
    expect(result).toBe(Big(5).plus(Big(3)).toString());
  });

  test('performs subtraction correctly', () => {
    const result = operate('10', '7', '-');
    expect(result).toBe(Big(10).minus(Big(7)).toString());
  });

  test('performs multiplication correctly', () => {
    const result = operate('4', '6', 'x');
    expect(result).toBe(Big(4).times(Big(6)).toString());
  });

  test('performs division correctly', () => {
    const result = operate('15', '3', '÷');
    expect(result).toBe(Big(15).div(Big(3)).toString());
  });

  test('handles division by 0', () => {
    const result = operate('10', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  test('performs modulo correctly', () => {
    const result = operate('9', '4', '%');
    expect(result).toBe(Big(9).mod(Big(4)).toString());
  });

  test('handles modulo with divisor 0', () => {
    const result = operate('10', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  test('throws error for unknown operation', () => {
    expect(() => operate('2', '3', '^')).toThrow("Unknown operation '^'");
  });
});
