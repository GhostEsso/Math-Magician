import operate from '../logic/operate';

// Test the four major math operations (add, subtract, multiply, & divide)
// Also include modulo and modulo errors
describe('Test the operate function', () => {
  // Test the addition operation
  test('Sum 3 + 7 to equal 10', () => {
    // Arrange the numbers and operations
    const numberOne = 3;
    const numberTwo = 7;
    const operation = '+';
    const output = '10';

    // Execute the addition operation
    const result = operate(numberOne, numberTwo, operation);

    // Assert the addition operation
    expect(result).toBe(output);
  });

  // Test the subtraction operation
  test('Subtract 12 - 7 to equal 5', () => {
    // Arrange the numbers and operations
    const numberOne = 12;
    const numberTwo = 7;
    const operation = '-';
    const output = '5';

    // Execute the subtraction operation
    const result = operate(numberOne, numberTwo, operation);

    // Assert the subtraction operation
    expect(result).toBe(output);
  });

  // Test the multiplication operation
  test('Multiply 3 x 9 to equal 27', () => {
    // Arrange the numbers and operations
    const numberOne = 3;
    const numberTwo = 9;
    const operation = 'x';
    const output = '27';

    // Execute the multiplication operation
    const result = operate(numberOne, numberTwo, operation);

    // Assert the multiplication operation
    expect(result).toBe(output);
  });

  // Test the division operation
  test('Divide 16 ÷ 4 to equal 4', () => {
    // Arrange the numbers and operations
    const numberOne = 16;
    const numberTwo = 4;
    const operation = '÷';
    const output = '4';

    // Execute the division operation
    const result = operate(numberOne, numberTwo, operation);

    // Assert the division operation
    expect(result).toBe(output);
  });

  // Test the modulo operation
  test('Mod 6 % 4 to equal 2', () => {
    // Arrange the numbers and operations
    const numberOne = 6;
    const numberTwo = 4;
    const operation = '%';
    const output = '2';

    // Execute the modulo operation
    const result = operate(numberOne, numberTwo, operation);

    // Assert the division operation
    expect(result).toBe(output);
  });

  // Test the modulo function in case if any error is detected in the system
  test('Mod 6 % 0 to get an error message', () => {
    // Arrange the numbers and operations
    const numberOne = 6;
    const numberTwo = 0;
    const operation = '%';
    const output = "Can't find modulo as can't divide by 0.";

    // Execute the modulo (error) operation
    const result = operate(numberOne, numberTwo, operation);

    // Assert the modulo (error) operation
    expect(result).toBe(output);
  });
});
