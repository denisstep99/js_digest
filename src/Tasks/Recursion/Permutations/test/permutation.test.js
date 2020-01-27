const expect = require('expect');
const permutations = require('../index');

describe('Permutations', () => {
  describe('With repetitions', () => {
    it('Version 1', () => {
      expect(permutations.v1(['a', 'b'], 1)).toEqual([['a'], ['b']]);
      expect(permutations.v1(['a', 'b'])).toEqual([['a', 'a'], ['a', 'b'], ['b', 'a'], ['b', 'b']]);
      expect(permutations.v1(['a', 'b', 'c'], 1)).toEqual([['a'], ['b'], ['c']]);
      expect(permutations.v1(['A', 'B', 'C'])).toEqual([
        ['A', 'A', 'A'],
        ['A', 'A', 'B'],
        ['A', 'A', 'C'],
        ['A', 'B', 'A'],
        ['A', 'B', 'B'],
        ['A', 'B', 'C'],
        ['A', 'C', 'A'],
        ['A', 'C', 'B'],
        ['A', 'C', 'C'],
        ['B', 'A', 'A'],
        ['B', 'A', 'B'],
        ['B', 'A', 'C'],
        ['B', 'B', 'A'],
        ['B', 'B', 'B'],
        ['B', 'B', 'C'],
        ['B', 'C', 'A'],
        ['B', 'C', 'B'],
        ['B', 'C', 'C'],
        ['C', 'A', 'A'],
        ['C', 'A', 'B'],
        ['C', 'A', 'C'],
        ['C', 'B', 'A'],
        ['C', 'B', 'B'],
        ['C', 'B', 'C'],
        ['C', 'C', 'A'],
        ['C', 'C', 'B'],
        ['C', 'C', 'C'],
      ]);
      expect(permutations.v1(['a', 'b', 'c', 'b']).length).toEqual(4 ** 4);
      expect(permutations.v1([1, 2, 3, 4, 5, 6], 4).length).toEqual(6 ** 4);
    });

    it('Version 2', () => {
      expect(permutations.v2(['a', 'b'], 1)).toEqual([['a'], ['b']]);
      expect(permutations.v2(['a', 'b'])).toEqual([['a', 'a'], ['a', 'b'], ['b', 'a'], ['b', 'b']]);
      expect(permutations.v2(['a', 'b', 'c'], 1)).toEqual([['a'], ['b'], ['c']]);
      expect(permutations.v2(['A', 'B', 'C'])).toEqual([
        ['A', 'A', 'A'],
        ['A', 'A', 'B'],
        ['A', 'A', 'C'],
        ['A', 'B', 'A'],
        ['A', 'B', 'B'],
        ['A', 'B', 'C'],
        ['A', 'C', 'A'],
        ['A', 'C', 'B'],
        ['A', 'C', 'C'],
        ['B', 'A', 'A'],
        ['B', 'A', 'B'],
        ['B', 'A', 'C'],
        ['B', 'B', 'A'],
        ['B', 'B', 'B'],
        ['B', 'B', 'C'],
        ['B', 'C', 'A'],
        ['B', 'C', 'B'],
        ['B', 'C', 'C'],
        ['C', 'A', 'A'],
        ['C', 'A', 'B'],
        ['C', 'A', 'C'],
        ['C', 'B', 'A'],
        ['C', 'B', 'B'],
        ['C', 'B', 'C'],
        ['C', 'C', 'A'],
        ['C', 'C', 'B'],
        ['C', 'C', 'C'],
      ]);
      expect(permutations.v2(['a', 'b', 'c', 'b']).length).toEqual(4 ** 4);
      expect(permutations.v2([1, 2, 3, 4, 5, 6], 4).length).toEqual(6 ** 4);
    })
  })
});
