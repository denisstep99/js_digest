const factorial = require('../index');
const expect = require('expect');

describe('Factorial', () => {
  it('Version 1', () => {
    expect(factorial.v1(0)).toBe(1);
    expect(factorial.v1(1)).toBe(1);
    expect(factorial.v1(2)).toBe(2);
    expect(factorial.v1(3)).toBe(6);
    expect(factorial.v1(4)).toBe(24);
    expect(factorial.v1(5)).toBe(120);
    expect(factorial.v1(6)).toBe(720);
    expect(factorial.v1(7)).toBe(5040);
    expect(factorial.v1(8)).toBe(40320);
    expect(factorial.v1(9)).toBe(362880);
    expect(factorial.v1(10)).toBe(3628800);
    expect(factorial.v1(11)).toBe(39916800);
    expect(factorial.v1(15)).toBe(1307674368000);
  });

  it('Version 2', () => {
    expect(factorial.v2(0)).toBe(1);
    expect(factorial.v2(1)).toBe(1);
    expect(factorial.v2(2)).toBe(2);
    expect(factorial.v2(3)).toBe(6);
    expect(factorial.v2(4)).toBe(24);
    expect(factorial.v2(5)).toBe(120);
    expect(factorial.v2(6)).toBe(720);
    expect(factorial.v2(7)).toBe(5040);
    expect(factorial.v2(8)).toBe(40320);
    expect(factorial.v2(9)).toBe(362880);
    expect(factorial.v2(10)).toBe(3628800);
    expect(factorial.v2(11)).toBe(39916800);
    expect(factorial.v2(15)).toBe(1307674368000);
  })
});
