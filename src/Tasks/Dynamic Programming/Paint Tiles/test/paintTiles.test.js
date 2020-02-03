const expect = require('expect');
const choseTile = require('../index');

describe('Tiles paint problem', () => {
  it('Two colors', () => {
    expect(choseTile([
      [1, 4],
      [2, 3],
      [4, 1],
      [10, 2]
    ])).toEqual({path: [0, 1, 0, 1], price: 10});

    expect(choseTile([
      [1, 2],
      [4, 3],
      [2, 2],
      [1, 2]
    ])).toEqual({path: [0, 1, 0, 1], price: 8});

    expect(choseTile([
      [3, 1],
      [2, 3],
      [3, 2],
      [1, 3]
    ])).toEqual({path: [1, 0, 1, 0], price: 6});
  });


  it('Three colors', () => {
    expect(choseTile([
      [1, 4, 1],
      [2, 3, 4],
      [4, 1, 2],
      [10, 2, 5]
    ])).toEqual({path: [2, 0, 2, 1], price: 7});

    expect(choseTile([
      [4, 4, 1],
      [2, 4, 4],
      [4, 4, 2],
      [4, 5, 5]
    ])).toEqual({path: [2, 0, 2, 0], price: 9});
  });

  it('Three colors', () => {
    expect(choseTile([
      [1, 3, 4, 5],
      [2, 3, 2, 3],
      [3, 1, 4, 1],
      [2, 3, 1, 3],
      [5, 4, 2, 4],
      [6, 1, 6, 6]
    ])).toEqual({path: [0, 2, 1, 0, 2, 1], price: 9});
  });
});
