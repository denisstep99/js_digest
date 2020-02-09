const expect = require('expect');
const Proxy = require('../index');

describe('Proxy pattern', () => {
  it('Common tests', () => {
    const subject = new Proxy.Subject('Denis');
    const proxy = Proxy.createProxy(subject);

    expect(proxy).toBeInstanceOf(Proxy.Subject);
    expect(proxy.hello()).toBe('Hello, my name is Denis world!');
    expect(proxy.goodbye('Mark')).toBe('Goodbye Mark');
  });
});
