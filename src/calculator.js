#!/usr/bin/env node

/**
 * calculator.js - CLI Calculator Application
 *
 * Supported operations:
 *   addition       (+)  : adds two numbers
 *   subtraction    (-)  : subtracts the second number from the first
 *   multiplication (*)  : multiplies two numbers
 *   division       (/)  : divides the first number by the second
 *
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *
 * Examples:
 *   node calculator.js 10 + 5   => 15
 *   node calculator.js 10 - 3   => 7
 *   node calculator.js 4 * 6    => 24
 *   node calculator.js 20 / 4   => 5
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

// Parses CLI arguments and runs the requested operation
function main() {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Operators: + (addition), - (subtraction), * (multiplication), / (division)');
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

  switch (operator) {
    case '+':
      // addition
      result = add(a, b);
      break;
    case '-':
      // subtraction
      result = subtract(a, b);
      break;
    case '*':
      // multiplication
      result = multiply(a, b);
      break;
    case '/':
      // division
      try {
        result = divide(a, b);
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
      break;
    default:
      console.error(`Error: Unsupported operator "${operator}". Use +, -, *, or /.`);
      process.exit(1);
  }

  console.log(`${a} ${operator} ${b} = ${result}`);
}

// Only run CLI logic when executed directly, not when imported as a module
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide };
