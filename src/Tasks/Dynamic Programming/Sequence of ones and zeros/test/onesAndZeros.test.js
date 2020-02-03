const expect = require('expect');
const count = require('../index');

describe('Ones and Zeroes problem', () => {
  it('Common tests', () => {
    expect(count(1)).toBe(2);
    expect(count(2)).toBe(3);
    expect(count(3)).toBe(5);
    expect(count(4)).toBe(8);
    expect(count(5)).toBe(13);
  });
});
