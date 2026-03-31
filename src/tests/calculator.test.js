/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Covers all four basic arithmetic operations:
 *   - addition       (+)
 *   - subtraction    (-)
 *   - multiplication (*)
 *   - division       (/)
 *
 * Includes edge cases: division by zero, negatives, decimals, zeros.
 */

const { add, subtract, multiply, divide } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  // Example from image: 2 + 3 = 5
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds positive integers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds negative numbers', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('adds decimals', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });

  test('adding zero returns the same number', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adding two zeros returns zero', () => {
    expect(add(0, 0)).toBe(0);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  // Example from image: 10 - 4 = 6
  test('10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts positive integers', () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test('subtracts resulting in a negative number', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('subtracts decimals', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });

  test('subtracting zero returns the same number', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracting a number from itself returns zero', () => {
    expect(subtract(42, 42)).toBe(0);
  });
});

// ─── Multiplication ───────────────────────────────────────────────────────────
describe('multiply', () => {
  // Example from image: 45 * 2 = 90
  test('45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies positive integers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test('multiplies two negative numbers', () => {
    expect(multiply(-4, -4)).toBe(16);
  });

  test('multiplies decimals', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplying by one returns the same number', () => {
    expect(multiply(13, 1)).toBe(13);
  });
});

// ─── Division ─────────────────────────────────────────────────────────────────
describe('divide', () => {
  // Example from image: 20 / 5 = 4
  test('20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides positive integers', () => {
    expect(divide(100, 4)).toBe(25);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides a negative number', () => {
    expect(divide(-20, 4)).toBe(-5);
  });

  test('divides two negative numbers', () => {
    expect(divide(-18, -3)).toBe(6);
  });

  test('divides zero by a number returns zero', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero must throw
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed.');
  });
});
