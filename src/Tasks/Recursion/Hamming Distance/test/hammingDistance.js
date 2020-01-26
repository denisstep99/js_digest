const expect = require('expect');
const distance = require('../index');

describe('Hamming distance (recursion)', () => {
  it('Common tests', () => {
    expect(distance('', '')).toBe(0);
    expect(distance('aba', 'abb')).toBe(1);
    expect(distance('stepanov', 'smetanov')).toBe(2);
    expect(distance('Stepanov', 'smetanov')).toBe(3);
    expect(distance('829183', '888888')).toBe(4);
    expect(() => distance('short string', 'very long string')).toThrow();
  });
});
