const expect = require('expect');
const {promisedFoo, promisedBoo, promisedBaz} = require('../index');

describe('Three callbacks problem', () => {
  it('Common tests', () => {
    for (let i = 0; i < 10; i++) {
      expect(Promise.all([
        promisedFoo(),
        promisedBoo(),
        promisedBaz()
      ])).resolves.toEqual(['foo', 'boo', 'baz']);
    }
  })
});
