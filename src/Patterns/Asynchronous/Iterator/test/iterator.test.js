const expect = require('expect');
const TaskIterator = require('../index');

describe('Callback pattern `Iterator`', () => {
  const testArr = [];

  function funcFactory(callback, timeout) {
    return function (newCallback) {
      setTimeout(() => {
        callback();
        newCallback()
      }, timeout);
    }
  }

  function syncFuncFactory(callback) {
    return function (newCallback) {
      callback();
      newCallback();
    }
  }

  const f1 = funcFactory(() => {
    testArr.push(1)
  }, 0);
  const f2 = funcFactory(() => {
    testArr.push(2)
  }, 0);
  const f3 = funcFactory(() => {
    testArr.push(3)
  }, 0);
  const f4 = funcFactory(() => {
    testArr.push(4)
  }, 0);
  const f5 = funcFactory(() => {
    testArr.push(5)
  }, 0);
  const f6 = funcFactory(() => {
    testArr.push(6)
  }, 0);
  const err = (callback) => {
    setTimeout(() => {
      callback(new Error('Error!'));
    }, 0)
  };


  const s1 = syncFuncFactory(() => {
    testArr.push(1)
  });
  const s2 = syncFuncFactory(() => {
    testArr.push(2)
  });
  const s3 = syncFuncFactory(() => {
    testArr.push(3)
  });

  it('Should run in turn', (done) => {
    new TaskIterator([f1, f2, f3, f4, f5, f6], function (err) {
      expect(testArr).toEqual([1, 2, 3, 4, 5, 6]);
      testArr.length = 0;
      done();
    }).start();
  });

  it('Should stop running if an error', (done) => {
    new TaskIterator([f1, f2, f3, f4, err, f6], function (err) {
      expect(err).toBeInstanceOf(Error);
      expect(testArr).toEqual([1, 2, 3, 4]);
      testArr.length = 0;
      done();
    }).start();
  });

  it('Should work asynchronous with synchronous functions', (done) => {
    new TaskIterator([s1, s2, s3], function (err) {
      expect(testArr).toEqual([10, 1, 2, 3]);
      testArr.length = 0;
      done();
    }).start();

    testArr.push(10);
    expect(testArr).toEqual([10]);
  });
});
