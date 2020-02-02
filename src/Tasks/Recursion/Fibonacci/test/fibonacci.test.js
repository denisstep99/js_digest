const expect = require('expect');
const fibonacci = require('../index');

describe('Fibonacci', () => {
  it('Version 1', () => {
    expect(fibonacci.v1(1)).toBe(1);
    expect(fibonacci.v1(2)).toBe(1);
    expect(fibonacci.v1(3)).toBe(2);
    expect(fibonacci.v1(4)).toBe(3);
    expect(fibonacci.v1(10)).toBe(55);
    expect(fibonacci.v1(20)).toBe(6765);
  });

  it('Version 2', () => {
    expect(fibonacci.v2(1)).toBe(1);
    expect(fibonacci.v2(2)).toBe(1);
    expect(fibonacci.v2(3)).toBe(2);
    expect(fibonacci.v2(4)).toBe(3);
    expect(fibonacci.v2(10)).toBe(55);
    expect(fibonacci.v2(20)).toBe(6765);
    expect(fibonacci.v2(32)).toBe(2178309);
  });

  it('Version 3', () => {
    expect(fibonacci.v3(1)).toBe(1);
    expect(fibonacci.v3(2)).toBe(1);
    expect(fibonacci.v3(3)).toBe(2);
    expect(fibonacci.v3(4)).toBe(3);
    expect(fibonacci.v3(10)).toBe(55);
    expect(fibonacci.v3(20)).toBe(6765);
    expect(fibonacci.v3(32)).toBe(2178309);
  });
});
