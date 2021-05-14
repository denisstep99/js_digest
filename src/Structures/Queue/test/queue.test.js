const Queue = require('../index');
const expect = require('expect');

describe('Queue structure', () => {
  it('Checking isEmpty method works correctly', () => {
    const queue1 = new Queue([100, 23, 12, 3]);
    const queue2 = new Queue([]);
    const queue3 = new Queue([1,2,3]);

    expect(queue1.isEmpty()).toBeFalsy();
    expect(queue2.isEmpty()).toBeTruthy();
    expect(queue3.isEmpty()).toBeFalsy();

    queue3.get();
    queue3.get();
    queue3.get();

    expect(queue3.isEmpty()).toBeTruthy();
  });

  it('Checking size field works correctly', () => {
    const queue1 = new Queue([100, 23, 12, 3]);
    const queue2 = new Queue([]);

    expect(queue1.size).toEqual(4);
    expect(queue2.size).toEqual(0);

    queue1.get();

    expect(queue1.size).toEqual(3);

    queue2.set(3);
    queue2.set(2);

    expect(queue2.size).toEqual(2);

    queue2.set(2);
    queue2.set(3);

    expect(queue2.size).toEqual(4);
  });
});
