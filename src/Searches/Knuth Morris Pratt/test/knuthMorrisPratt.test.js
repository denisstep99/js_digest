const knuthMorrisPratt = require('../index');
const expect = require('expect');

describe('Knuth-Morris-Pratt algorithm', () => {
  it('Should find word position in given text', () => {
    expect(knuthMorrisPratt('', '')).toBe(0);
    expect(knuthMorrisPratt('a', '')).toBe(0);
    expect(knuthMorrisPratt('a', 'a')).toBe(0);
    expect(knuthMorrisPratt('abcbcglx', 'abca')).toBe(-1);
    expect(knuthMorrisPratt('abcbcglx', 'bcgl')).toBe(3);
    expect(knuthMorrisPratt('abcxabcdabxabcdabcdabcy', 'abcdabcy')).toBe(15);
    expect(knuthMorrisPratt('abcxabcdabxabcdabcdabcy', 'abcdabca')).toBe(-1);
    expect(knuthMorrisPratt('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca')).toBe(12);
    expect(knuthMorrisPratt('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa')).toBe(11);
  });
});
