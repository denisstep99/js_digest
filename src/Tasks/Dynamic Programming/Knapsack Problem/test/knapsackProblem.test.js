const expect = require('expect');
const findMax = require('../index');

describe('Knapsack problem', () => {
  it('Zero objects', () => {
    expect(findMax(10, [])).toEqual([]);
    expect(findMax(0, [])).toEqual([]);
  });

  it('One object', () => {
    expect(findMax(10, [{weight: 10, cost: 12}])).toEqual([{weight: 10, cost: 12}]);
    expect(findMax(0, [{weight: 1, cost: 12}])).toEqual([]);
    expect(findMax(1, [{weight: 0, cost: 12}])).toEqual([{weight: 0, cost: 12}]);
    expect(findMax(1, [{weight: 1, cost: 12}])).toEqual([{weight: 1, cost: 12}]);
  });

  it('Two object', () => {
    expect(findMax(10, [{weight: 10, cost: 12}, {weight: 20, cost: 10}]))
      .toEqual([{weight: 10, cost: 12}]);
    expect(findMax(20, [{weight: 10, cost: 12}, {weight: 20, cost: 10}]))
      .toEqual([{weight: 10, cost: 12}]);
    expect(findMax(20, [{weight: 10, cost: 12}, {weight: 20, cost: 14}]))
      .toEqual([{weight: 20, cost: 14}]);
    expect(findMax(30, [{weight: 10, cost: 12}, {weight: 20, cost: 10}]))
      .toEqual([
        {weight: 20, cost: 10},
        {weight: 10, cost: 12}
      ]);
    expect(findMax(0, [{weight: 10, cost: 12}, {weight: 20, cost: 10}]))
      .toEqual([]);
    expect(findMax(9, [{weight: 10, cost: 12}, {weight: 20, cost: 10}]))
      .toEqual([]);
  });

  it('Many objects', () => {
    expect(findMax(10, [
      {weight: 10, cost: 2},
      {weight: 20, cost: 14},
      {weight: 4, cost: 6},
      {weight: 5, cost: 2}
    ])).toEqual([
      {weight: 5, cost: 2},
      {weight: 4, cost: 6}
    ]);

    expect(findMax(20, [
      {weight: 10, cost: 2},
      {weight: 20, cost: 14},
      {weight: 4, cost: 6},
      {weight: 5, cost: 2}
    ])).toEqual([
      {weight: 20, cost: 14}
    ]);

    expect(findMax(30, [
      {weight: 10, cost: 2},
      {weight: 20, cost: 14},
      {weight: 4, cost: 6},
      {weight: 5, cost: 2}
    ])).toEqual([
      {weight: 5, cost: 2},
      {weight: 4, cost: 6},
      {weight: 20, cost: 14}
    ]);
  });

});
