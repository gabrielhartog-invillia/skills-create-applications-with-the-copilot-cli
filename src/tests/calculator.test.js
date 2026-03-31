const { add, subtract, multiply, divide, modulo, exponentiate, squareRoot } = require('../calculator');

describe('add', () => {
  test('adds two positive numbers', () => expect(add(2, 3)).toBe(5));
  test('adds positive and negative number', () => expect(add(10, -4)).toBe(6));
  test('adds two negative numbers', () => expect(add(-3, -7)).toBe(-10));
  test('adds with zero', () => expect(add(5, 0)).toBe(5));
  test('adds two zeros', () => expect(add(0, 0)).toBe(0));
  test('adds decimals', () => expect(add(1.5, 2.5)).toBeCloseTo(4));
  test('adds large numbers', () => expect(add(1000000, 2000000)).toBe(3000000));
});

describe('subtract', () => {
  test('subtracts two positive numbers', () => expect(subtract(10, 4)).toBe(6));
  test('subtracts giving negative result', () => expect(subtract(3, 7)).toBe(-4));
  test('subtracts two negative numbers', () => expect(subtract(-3, -7)).toBe(4));
  test('subtracts with zero', () => expect(subtract(5, 0)).toBe(5));
  test('subtracts two zeros', () => expect(subtract(0, 0)).toBe(0));
  test('subtracts decimals', () => expect(subtract(5.5, 2.5)).toBeCloseTo(3));
  test('subtracts large numbers', () => expect(subtract(3000000, 1000000)).toBe(2000000));
});

describe('multiply', () => {
  test('multiplies two positive numbers', () => expect(multiply(45, 2)).toBe(90));
  test('multiplies positive and negative number', () => expect(multiply(6, -3)).toBe(-18));
  test('multiplies two negative numbers', () => expect(multiply(-4, -5)).toBe(20));
  test('multiplies by zero', () => expect(multiply(7, 0)).toBe(0));
  test('multiplies by one', () => expect(multiply(9, 1)).toBe(9));
  test('multiplies decimals', () => expect(multiply(1.5, 2)).toBeCloseTo(3));
  test('multiplies large numbers', () => expect(multiply(1000, 2000)).toBe(2000000));
});

describe('divide', () => {
  test('divides two positive numbers', () => expect(divide(20, 5)).toBe(4));
  test('divides giving decimal result', () => expect(divide(7, 2)).toBeCloseTo(3.5));
  test('divides negative by positive', () => expect(divide(-12, 4)).toBe(-3));
  test('divides by one', () => expect(divide(9, 1)).toBe(9));
  test('divides zero by a number', () => expect(divide(0, 5)).toBe(0));
  test('throws on division by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed.');
  });
  test('divides decimals', () => expect(divide(7.5, 2.5)).toBeCloseTo(3));
});

describe('modulo', () => {
  test('returns remainder of two positive numbers', () => expect(modulo(10, 3)).toBe(1));
  test('returns zero when divisible', () => expect(modulo(9, 3)).toBe(0));
  test('returns modulo of larger divisor', () => expect(modulo(4, 7)).toBe(4));
  test('returns modulo with negative dividend', () => expect(modulo(-10, 3)).toBe(-1));
  test('returns zero for modulo of zero', () => expect(modulo(0, 5)).toBe(0));
  test('throws on modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed.');
  });
  test('returns modulo of decimals', () => expect(modulo(10.5, 3)).toBeCloseTo(1.5));
});

describe('exponentiate', () => {
  test('raises to a positive power', () => expect(exponentiate(2, 10)).toBe(1024));
  test('raises to power zero', () => expect(exponentiate(5, 0)).toBe(1));
  test('raises to power one', () => expect(exponentiate(7, 1)).toBe(7));
  test('raises negative base to even power', () => expect(exponentiate(-2, 4)).toBe(16));
  test('raises negative base to odd power', () => expect(exponentiate(-2, 3)).toBe(-8));
  test('raises to a fractional power', () => expect(exponentiate(4, 0.5)).toBeCloseTo(2));
  test('raises zero to a positive power', () => expect(exponentiate(0, 5)).toBe(0));
});

describe('squareRoot', () => {
  test('returns square root of a perfect square', () => expect(squareRoot(9)).toBe(3));
  test('returns square root of zero', () => expect(squareRoot(0)).toBe(0));
  test('returns square root of one', () => expect(squareRoot(1)).toBe(1));
  test('returns square root of non-perfect square', () => expect(squareRoot(2)).toBeCloseTo(1.4142));
  test('returns square root of large number', () => expect(squareRoot(10000)).toBe(100));
  test('throws on square root of negative number', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of a negative number is not allowed.');
  });
  test('returns square root of a decimal', () => expect(squareRoot(0.25)).toBeCloseTo(0.5));
});
