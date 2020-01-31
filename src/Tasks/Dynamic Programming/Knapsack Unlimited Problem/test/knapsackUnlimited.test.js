const findMax = require('../index');
const expect = require('expect');

describe('Knapsack problem (unlimited goods)', () => {
  it('One object', () => {
    expect(findMax(10, [{cost: 1, weight: 1}])).toEqual([10]);
    expect(findMax(100, [{cost: 1, weight: 1}])).toEqual([100]);
    expect(findMax(0, [{cost: 1, weight: 1}])).toEqual([0]);
    expect(findMax(10, [{cost: 1, weight: 100}])).toEqual([0]);
    expect(findMax(10, [{cost: 1, weight: 10}])).toEqual([1]);
    expect(findMax(10, [{cost: 0.5, weight: 1}])).toEqual([10]);
  });


  it('Two objects', () => {
    expect(findMax(10, [{cost: 1, weight: 1}, {cost: 2, weight: 1}])).toEqual([0, 10]);
    expect(findMax(100, [{cost: 2, weight: 1}, {cost: 1, weight: 1}])).toEqual([100, 0]);
    expect(findMax(100, [{cost: 1, weight: 1}, {cost: 150, weight: 90}])).toEqual([10, 1]);
    expect(findMax(10, [{cost: 1, weight: 1}, {cost: 150, weight: 90}])).toEqual([10, 0]);
    expect(findMax(0, [{cost: 1, weight: 10}, {cost: 150, weight: 90}])).toEqual([0, 0]);
    expect(findMax(10, [{cost: 0.5, weight: 1}, {cost: 150, weight: 90}])).toEqual([10, 0]);
  });

  it('Many objects', () => {
    expect(findMax(10, [
      {cost: 1, weight: 1},
      {cost: 2, weight: 1},
      {cost: 3, weight: 1},
      {cost: 4, weight: 1},
      {cost: 5, weight: 1}
      ])).toEqual([0, 0, 0, 0, 10]);

    expect(findMax(100, [
      {cost: 1, weight: 1},
      {cost: 20, weight: 3},
      {cost: 100, weight: 10},
      {cost: 210, weight: 20},
      {cost: 1490, weight: 90}
    ])).toEqual([0, 0, 1, 0, 1]);
  })
});
