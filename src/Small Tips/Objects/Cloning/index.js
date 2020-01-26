const expect = require('expect');

/**
 * Shallow Clone
 * To make deep copy use deepClone function from ./deepClone
 */

describe('Cloning objects', () => {
  it('Cloning using spread operator', () => {
    const originalObject = {name: 'Jack', age: 18};
    const copy = {...originalObject};

    copy.name = 'Fillip';
    copy.age = 90;

    expect(originalObject).toEqual({name: 'Jack', age: 18});
  });


  it('Cloning using Object.assign()', () => {
    const originalObject = {name: 'Jack', age: 18};
    const copy = Object.assign({}, originalObject);

    copy.name = 'Fillip';
    copy.age = 90;

    expect(originalObject).toEqual({name: 'Jack', age: 18});
  });
});
