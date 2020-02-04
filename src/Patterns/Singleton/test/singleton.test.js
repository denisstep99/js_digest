const expect = require('expect');
const Singleton = require('../index');

describe('Singleton pattern', () => {
  it('Creation with the `new` operator.', () => {
    expect(() => new Singleton()).toThrow();

    const singleton1 = new Singleton('Denis', 70);
    expect(singleton1).toEqual({name: 'Denis', weight: 70});

    const singleton2 = new Singleton('Vlad', 90);
    expect(singleton2).toEqual({name: 'Denis', weight: 70});

    const singleton3 = new Singleton();
    expect(singleton3).toEqual({name: 'Denis', weight: 70});

    const singleton4 = Singleton.getInstance();
    expect(singleton3).toEqual({name: 'Denis', weight: 70});
  });


  it('Creation with the `getInstance` method.', () => {
    //only for test
    delete Singleton._instance;

    expect(() => Singleton.getInstance()).toThrow();

    const singleton1 = Singleton.getInstance('Denis', 70);
    expect(singleton1).toEqual({name: 'Denis', weight: 70});

    const singleton2 = new Singleton('Vlad', 90);
    expect(singleton2).toEqual({name: 'Denis', weight: 70});

    const singleton3 = Singleton.getInstance();
    expect(singleton3).toEqual({name: 'Denis', weight: 70});
  });
});
