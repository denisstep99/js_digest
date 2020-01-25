const expect = require('expect');
const deepClone = require('./deepClone');

describe('Deep clone using JSON', () => {
  const testObj = {
    name: 'Denis',
    address: {
      str: 'Vladimirskaya',
      building: 12,
      apartments: 90
    },
    arr: [
      {name: 'Victor'},
      {
        name: 'Vladimir',
        arr: [{name: 'Vlad'}]
      }
    ]
  };

  const copy = deepClone(testObj);

  it('Specific cases', () => {
    expect(deepClone({})).toEqual({});
    expect(deepClone([])).toEqual([]);
    expect(deepClone({name: []})).toEqual({name: []});
    expect(deepClone([{},{},{}])).toEqual([{},{},{}]);

    // JSON.stringify doesn't support methods
    expect(deepClone({printNumber() {return 20}}).printNumber).toBeUndefined();
  });

  it('Properties should be the same', () => {
    expect(testObj.name).toBe(copy.name);
    expect(testObj.address.building).toBe(copy.address.building);
    expect(testObj.arr[1].name).toBe(copy.arr[1].name);
    expect(testObj.arr[1].arr[0].name).toBe(copy.arr[1].arr[0].name);
  });

  it('Properties should not be linked', () => {
    copy.name = 'Vlad';
    expect(testObj.name).toBe('Denis');

    copy.address.building = 20;
    expect(testObj.address.building).toBe(12);

    copy.arr[1].name = 'Denis';
    expect(testObj.arr[1].name).toBe('Vladimir');

    copy.arr[1].arr[0].name = 'Denis';
    expect(testObj.arr[1].arr[0].name).toBe('Vlad');
  });
});
