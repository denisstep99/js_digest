const expect = require('expect');
const numbers = require('../index');

describe('Pseudo array', () => {
  it('Even numbers', () => {
    expect(4 in numbers.evenNumbers).toBe(true);
    expect(-4 in numbers.evenNumbers).toBe(true);
    expect(5 in numbers.evenNumbers).toBe(false);
    expect(-5 in numbers.evenNumbers).toBe(false);

    expect(numbers.evenNumbers[0]).toBe(0);
    expect(numbers.evenNumbers[-2]).toBe(-4);
    expect(numbers.evenNumbers[4]).toBe(8);
    expect(numbers.evenNumbers[-5]).toBe(-10);
  });

  it('Odd numbers', () => {
    expect(1 in numbers.oddNumbers).toBe(true);
    expect(3 in numbers.oddNumbers).toBe(true);
    expect(4 in numbers.oddNumbers).toBe(false);
    expect(0 in numbers.oddNumbers).toBe(false);

    expect(numbers.oddNumbers[0]).toBeUndefined();
    expect(numbers.oddNumbers[-2]).toBe(-3);
    expect(numbers.oddNumbers[4]).toBe(7);
    expect(numbers.oddNumbers[-5]).toBe(-9);
  });
});
