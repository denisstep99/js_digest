const getCost = require('../index');
const expect = require('expect');

describe('The cheapest way problem', () => {
  const testData1 = [
    [1, 1, 1, 1, 1],
    [3, 100, 100, 100, 100],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ];

  const testData2 = [
    [2, 1, 1, 1, 1],
    [3, 100, 100, 100, 1],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ];

  const testData3 = [
    [2, 1, 1],
    [3, 1, 100],
    [10, 1, 1],
    [2, 20, 2],
    [1, 1, 10],
  ];

  const testData4 = [
    [2],
    [3],
    [10],
    [2],
    [1],
  ];

  const testData5 = [[1, 2, 3, 4, 5, 6]];

  it('Common tests', () => {
    expect(getCost(testData1)).toBe(11);
    expect(getCost(testData2)).toBe(10);
    expect(getCost(testData3)).toBe(18);
    expect(getCost(testData4)).toBe(18);
    expect(getCost(testData5)).toBe(21);
  })
});
