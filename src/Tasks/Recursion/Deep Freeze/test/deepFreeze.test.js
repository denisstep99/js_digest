const expect = require('expect');
const deepFreeze = require('../index');

describe('Deep Freeze', () => {
  let testObj = {
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
  deepFreeze(testObj);

  it('Should freeze all properties', () => {
    testObj.name = 'Vlad';
    expect(testObj.name).toBe('Denis');

    testObj.address = {};
    expect(testObj.address).toEqual({
      str: 'Vladimirskaya',
      building: 12,
      apartments: 90
    });

    testObj.address.building = 88;
    expect(testObj.address.building).toBe(12);

    testObj.arr[1] = {};
    expect(testObj.arr[1]).toEqual({
      name: 'Vladimir',
      arr: [{name: 'Vlad'}]
    });

    testObj.arr[1].arr[0].name  = "Petr";
    expect(testObj.arr[1].arr[0].name).toBe('Vlad');
  });
});
