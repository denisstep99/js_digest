const expect = require('expect');
const countReverses = require('../index');

describe('Count reverses in the array', () => {
  it('Common test', () => {
    expect(countReverses([])).toBe(0);
    expect(countReverses([1,2,3,4,5,6,7,8])).toBe(0);
    expect(countReverses([1,2,3,4,5,6,8,7])).toBe(1);
    expect(countReverses([1,1,1,1,1,1,1,1])).toBe(0);

    expect(countReverses([8,2,3,4,5,6,7,1])).toBe(13);
    expect(countReverses([5,4,3,2,1])).toBe(10);
  })
});
