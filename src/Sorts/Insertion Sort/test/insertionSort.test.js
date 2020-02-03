const sort = require('../index');
const expect = require('expect');


describe('Insertion sort', () => {
  it('Common tests', () => {
    expect(sort([])).toEqual([]);
    expect(sort([1,2,3])).toEqual([1,2,3]);
    expect(sort([3,2,1])).toEqual([1,2,3]);
    expect(sort([1, 3, 5, 2, 4, 9])).toEqual([1, 2, 3, 4, 5, 9]);
    expect(sort([-1, 0, -5, -2, 4, -9])).toEqual([-9, -5, -2, -1, 0, 4]);
  });

  it('With custom comparator', () => {
    const reverseString = (a, b) => {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    };

    expect(sort(['Denis','Kate','Alabama'])).toEqual(['Alabama','Denis','Kate']);
    expect(sort(['Abama','Abba','Abyssal'], reverseString)).toEqual(['Abyssal','Abba','Abama']);
  });
});
