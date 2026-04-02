#!/usr/bin/env node

/**
 * calculator.js - CLI Calculator Application
 *
 * Supported operations:
 *   addition       (+)    : adds two numbers
 *   subtraction    (-)    : subtracts the second number from the first
 *   multiplication (*)    : multiplies two numbers
 *   division       (/)    : divides the first number by the second
 *   modulo         (%)    : returns the remainder of a divided by b
 *   power          (**)   : raises base to the given exponent
 *   square root    (sqrt) : returns the square root of a single number
 *
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *   node calculator.js sqrt <number>
 *
 * Examples:
 *   node calculator.js 10 + 5    => 15
 *   node calculator.js 10 - 3    => 7
 *   node calculator.js 4 * 6     => 24
 *   node calculator.js 20 / 4    => 5
 *   node calculator.js 10 % 3    => 1
 *   node calculator.js 2 ** 8    => 256
 *   node calculator.js sqrt 16   => 4
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Error: Division by zero is not allowed.');
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b
// Throws an error if b is zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Error: Modulo by zero is not allowed.');
  }
  return a % b;
}

// Power: returns base raised to the given exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square Root: returns the square root of n
// Throws an error if n is negative
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Error: Cannot compute square root of a negative number.');
  }
  return Math.sqrt(n);
}

// Parses CLI arguments and runs the requested operation
function main() {
  const args = process.argv.slice(2);

  // Handle unary sqrt: node calculator.js sqrt <number>
  if (args.length === 2 && args[0] === 'sqrt') {
    const n = parseFloat(args[1]);
    if (isNaN(n)) {
      console.error('Error: Operand must be a valid number.');
      process.exit(1);
    }
    try {
      const result = squareRoot(n);
      console.log(`sqrt(${n}) = ${result}`);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
    return;
  }

  if (args.length !== 3) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('       node calculator.js sqrt <number>');
    console.error('Operators: + - * / % **');
    process.exit(1);
  }

  const a = parseFloat(args[0]);
  const operator = args[1];
  const b = parseFloat(args[2]);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both operands must be valid numbers.');
    process.exit(1);
  }

  let result;

  try {
    switch (operator) {
      case '+':
        result = add(a, b);
        break;
      case '-':
        result = subtract(a, b);
        break;
      case '*':
        result = multiply(a, b);
        break;
      case '/':
        result = divide(a, b);
        break;
      case '%':
        result = modulo(a, b);
        break;
      case '**':
        result = power(a, b);
        break;
      default:
        console.error(`Error: Unsupported operator "${operator}". Use +, -, *, /, %, or **.`);
        process.exit(1);
    }
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log(`${a} ${operator} ${b} = ${result}`);
}

// Only run CLI logic when executed directly, not when imported as a module
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
