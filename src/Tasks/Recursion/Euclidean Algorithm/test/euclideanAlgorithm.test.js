const expect = require('expect');
const gcd = require('../index');

describe('Euclidean algorithm', () => {
  it('Common test', () => {
    expect(gcd(1,1)).toBe(1);
    expect(gcd(2,1)).toBe(1);
    expect(gcd(1,2)).toBe(1);
    expect(gcd(100,1)).toBe(1);
    expect(gcd(888,8)).toBe(8);
    expect(gcd(239,171)).toBe(1);
    expect(gcd(239,30)).toBe(1);
    expect(gcd(625,25)).toBe(25);
  });
});
