const linearSearch = require('..');
const expect = require('expect');

describe('LinearSearch v3', () => {
  it('Should search all numbers in array', () => {
    const array = [1, 2, 4, 6, 2];

    expect(linearSearch.v3(array, 10)).toEqual([]);
    expect(linearSearch.v3(array, 1)).toEqual([0]);
    expect(linearSearch.v3(array, 2)).toEqual([1, 4]);
  });

  it('Should search all strings in array', () => {
    const array = ['a', 'b', 'a'];

    expect(linearSearch.v3(array, 'c')).toEqual([]);
    expect(linearSearch.v3(array, 'b')).toEqual([1]);
    expect(linearSearch.v3(array, 'a')).toEqual([0, 2]);
  });

  it('Should search through objects as well', () => {
    const comparatorCallback = (a, b) => {
      if (a.key === b.key) {
        return 0;
      }

      return a.key <= b.key ? -1 : 1;
    };

    const array = [
      {key: 5},
      {key: 6},
      {key: 7},
      {key: 6},
    ];

    expect(linearSearch.v3(array, {key: 10}, comparatorCallback)).toEqual([]);
    expect(linearSearch.v3(array, {key: 5}, comparatorCallback)).toEqual([0]);
    expect(linearSearch.v3(array, {key: 6}, comparatorCallback)).toEqual([1, 3]);
  });
});


describe('LinearSearch v2', () => {
  it('Should search first number in array', () => {
    const array = [1, 2, 4, 6, 2];

    expect(linearSearch.v2(array, 2)).toEqual(1);
    expect(linearSearch.v2(array, 6)).toEqual(3);
    expect(linearSearch.v2(array, 1)).toEqual(0);
  });

  it('Should return -1 if element not exist', () => {
    const array = ['a', 'b', 'a'];

    expect(linearSearch.v2(array, 'c')).toEqual(-1);
  });
});


describe('LinearSearch v1', () => {
  it('Should search first number in array', () => {
    const array = [1, 2, 4, 6, 2];

    expect(linearSearch.v1(array, 2)).toEqual(1);
    expect(linearSearch.v1(array, 6)).toEqual(3);
    expect(linearSearch.v1(array, 1)).toEqual(0);
  });

  it('Should return -1 if element not exist', () => {
    const array = ['a', 'b', 'a'];

    expect(linearSearch.v1(array, 'c')).toEqual(-1);
  });
});
