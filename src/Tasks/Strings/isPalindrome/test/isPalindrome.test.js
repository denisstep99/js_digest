const expect = require('expect');
const isPalindrome = require('../index');

describe('Is Palindrome', () => {
  it('Common test', () => {
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('aba')).toBe(true);
    expect(isPalindrome('Aba')).toBe(true);
    expect(isPalindrome('123321')).toBe(true);
    expect(isPalindrome('12321')).toBe(true);
    expect(isPalindrome('2 22 2  22')).toBe(true);
    expect(isPalindrome('арарат')).toBe(false);
    expect(isPalindrome('ЁЙЦицйё')).toBe(true);
  });
});
