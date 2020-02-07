const expect = require('expect');
const promisify = require('../promisify');

describe('Promisify', () => {
  function testWithoutParamsFn(callback) {
    setTimeout(() => callback(null, 2.11), 0);
  }

  function testWithParamsFn(param1, param2, callback) {
    setTimeout(() => callback(null, param1 + param2), 0);
  }

  function testErrFn(callback) {
    setTimeout(() => callback(new Error('Error')), 0);
  }

  it('Without params', () => {
    const promisified = promisify(testWithoutParamsFn);
    expect(promisified()).resolves.toBe(2.11);
  });

  it('With params', () => {
    const promisified = promisify(testWithParamsFn);
    expect(promisified(10, 20)).resolves.toBe(30);
  });

  it('With Error', () => {
    const promisified = promisify(testErrFn);
    expect(promisified()).rejects.toBeInstanceOf(Error);
  });
});
