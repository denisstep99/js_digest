const expect = require('expect');
const setPower = require('../index');

const comparatorFunction = (a, b) => {
  a = a.join('');
  b = b.join('');
  if (a.length === b.length){
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  } else {
    return a.length - b.length;
  }
};

describe('Set power recursive algorithm', () => {
  it('Common test', () => {
    expect(
      setPower([])
        .map((array) => array.sort())
        .sort(comparatorFunction)
    ).toEqual([[]]);

    expect(
      setPower([1])
        .map((array) => array.sort())
        .sort(comparatorFunction)
    ).toEqual([[], [1]]);

    expect(
      setPower(['a', 'b'])
        .map((array) => array.sort())
        .sort(comparatorFunction)
    ).toEqual([
      [],
      ['a'],
      ['b'],
      ['a', 'b']
    ]);

    expect(
      setPower(['a', 'b', 'c'])
        .map((array) => array.sort())
        .sort(comparatorFunction)
    ).toEqual([
      [],
      ['a'],
      ['b'],
      ['c'],
      ['a', 'b'],
      ['a', 'c'],
      ['b', 'c'],
      ['a', 'b', 'c']
    ]);
  });
});
