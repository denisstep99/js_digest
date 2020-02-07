const expect = require('expect');
const algorithm = require('../index');

describe('Paid stairs problem', () => {
  it('Common tests', () => {
    expect(algorithm([1])).toBe(1);
    expect(algorithm([1, 2])).toBe(2);
    expect(algorithm([1, 3, 1])).toBe(2);

    expect(algorithm([1, 3, 1, 1, 2, 3, 1])).toBe(5);
    expect(algorithm([1, 1, 1, 3, 1, 2])).toBe(5);
    expect(algorithm([8, 3, 1])).toBe(4);
    expect(algorithm([1, 8, 1, 2, 1, 3, 1])).toBe(4);
  })
});
