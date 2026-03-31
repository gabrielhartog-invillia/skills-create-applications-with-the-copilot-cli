/**
 * CLI Calculator
 * Supports: addition, subtraction, multiplication, division,
 *           modulo, exponentiation, and square root.
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed.');
  return a / b;
}

function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero is not allowed.');
  return a % b;
}

function exponentiate(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error('Square root of a negative number is not allowed.');
  return Math.sqrt(n);
}

function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error('Usage: node calculator.js <operation> <num1> [num2]');
    console.error('Operations: add, subtract, multiply, divide, modulo, exponentiate, sqrt');
    process.exit(1);
  }

  const operation = args[0];

  if (operation === 'sqrt') {
    const num = parseFloat(args[1]);
    if (isNaN(num)) {
      console.error('Invalid number provided.');
      process.exit(1);
    }
    try {
      console.log(squareRoot(num));
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
    return;
  }

  if (args.length < 3) {
    console.error('Usage: node calculator.js <operation> <num1> <num2>');
    process.exit(1);
  }

  const num1 = parseFloat(args[1]);
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Invalid numbers provided.');
    process.exit(1);
  }

  try {
    let result;
    switch (operation) {
      case 'add':
        result = add(num1, num2);
        break;
      case 'subtract':
        result = subtract(num1, num2);
        break;
      case 'multiply':
        result = multiply(num1, num2);
        break;
      case 'divide':
        result = divide(num1, num2);
        break;
      case 'modulo':
        result = modulo(num1, num2);
        break;
      case 'exponentiate':
        result = exponentiate(num1, num2);
        break;
      default:
        console.error(`Unknown operation: ${operation}`);
        process.exit(1);
    }
    console.log(result);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, exponentiate, squareRoot };
