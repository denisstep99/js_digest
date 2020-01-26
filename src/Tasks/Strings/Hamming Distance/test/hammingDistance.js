const expect = require('expect');
const distance = require('../index');

describe('Hamming distance v1', () => {
  it('Common tests', () => {
    expect(distance.v1('', '')).toBe(0);
    expect(distance.v1('aba', 'abb')).toBe(1);
    expect(distance.v1('stepanov', 'smetanov')).toBe(2);
    expect(distance.v1('Stepanov', 'smetanov')).toBe(3);
    expect(distance.v1('829183', '888888')).toBe(4);
    expect(() => distance.v1('short string', 'very long string')).toThrow();
  });
});


describe('Hamming distance v2', () => {
  it('Common tests', () => {
    expect(distance.v2('', '')).toBe(0);
    expect(distance.v2('aba', 'abb')).toBe(1);
    expect(distance.v2('stepanov', 'smetanov')).toBe(2);
    expect(distance.v2('Stepanov', 'smetanov')).toBe(3);
    expect(distance.v2('829183', '888888')).toBe(4);
    expect(() => distance.v2('short string', 'very long string')).toThrow();
  });
});


describe('Hamming distance v3', () => {
  it('Common tests', () => {
    expect(distance.v3('', '')).toBe(0);
    expect(distance.v3('aba', 'abb')).toBe(1);
    expect(distance.v3('stepanov', 'smetanov')).toBe(2);
    expect(distance.v3('Stepanov', 'smetanov')).toBe(3);
    expect(distance.v3('829183', '888888')).toBe(4);
    expect(() => distance.v3('short string', 'very long string')).toThrow();
  });
});
