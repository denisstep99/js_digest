const expect = require('expect');

describe('Check values', () => {
  it('Check -0 or 0', () => {
    // +0 === -0 returns true
    expect(+0 === -0).toBe(true);

    // to check that value is exactly 0 or -0 use Object.is
    expect(Object.is(+0, -0)).toBe(false);
  });

  /**
   * Don't use instanceof to check that the object is an array.
   * Use Array.isArray instead.
   *
   * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
   **/

  it('Check that object is array', () => {
    const notArray = {length: 100};
    const arr = [1, 2, 3, 4];

    expect(Array.isArray(arr)).toBe(true);
    expect(Array.isArray(notArray)).toBe(false);
  });
});
