const sort = require('../index');
const expect = require('expect');


describe('Merge sort', () => {
  it('Common tests', () => {
    expect(sort([])).toEqual([]);
    expect(sort([1,2,3])).toEqual([1,2,3]);
    expect(sort([3,2,1])).toEqual([1,2,3]);
    expect(sort([1, 3, 5, 2, 4, 9])).toEqual([1, 2, 3, 4, 5, 9]);
    expect(sort([-1, 0, -5, -2, 4, -9])).toEqual([-9, -5, -2, -1, 0, 4]);
  })
});
