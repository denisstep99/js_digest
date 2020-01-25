const expect = require('expect');
const lcm = require('../index');

describe('Least common multiple', () => {
  it('Common test', () => {
    expect(lcm(1, 1)).toBe(1);
    expect(lcm(1, 10)).toBe(10);
    expect(lcm(2, 5)).toBe(10);
    expect(lcm(239, 1)).toBe(239);
    expect(lcm(239, 478)).toBe(478);
    expect(lcm(200, 300)).toBe(600);
  })
});
