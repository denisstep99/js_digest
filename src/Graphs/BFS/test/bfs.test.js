const expect = require('expect');
const bfs = require('../index');

describe('BFS algorithm', () => {
  it('Should comply with the order of consideration', () => {
    const adjacencyList = [
      [10, 1],
      [5, 0, 2, 3],
      [7, 1, 4],
      [2, 1, 5],
      [4, 2, 6, 7],
      [3, 3, 7],
      [7, 4, 8],
      [8, 4, 5, 8],
      [12, 6, 7]
    ];

    const incFunction = ((start = 0) => () => start++)();

    bfs(adjacencyList, 0, incFunction);
    expect(adjacencyList).toEqual([
      [0, 1],
      [1, 0, 2, 3],
      [2, 1, 4],
      [3, 1, 5],
      [4, 2, 6, 7],
      [5, 3, 7],
      [6, 4, 8],
      [7, 4, 5, 8],
      [8, 6, 7]
    ]);
  });

  it('Should work correctly with every start node', () => {
    const adjacencyList = [
      [10, 1],
      [5, 0, 2, 3],
      [7, 1, 4],
      [2, 1, 5],
      [4, 2, 6, 7],
      [3, 3, 7],
      [7, 4, 8],
      [8, 4, 5, 8],
      [12, 6, 7]
    ];

    const incFunction = ((start = 0) => () => start++)();

    bfs(adjacencyList, 4, incFunction);
    expect(adjacencyList).toEqual([
      [7, 1],
      [4, 0, 2, 3],
      [1, 1, 4],
      [8, 1, 5],
      [0, 2, 6, 7],
      [6, 3, 7],
      [2, 4, 8],
      [3, 4, 5, 8],
      [5, 6, 7]
    ]);
  });
});
