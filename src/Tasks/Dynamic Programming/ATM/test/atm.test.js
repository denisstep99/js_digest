const expect = require('expect');
const ATM = require('../index');

describe('ATM problem', () => {
  it('The least possible sum.', () => {
    const atm = new ATM({30: 1, 50: 10, 100: 5, 500: 3, 1000: 2});
    expect(atm.getMoney(30)).toEqual({30: 1, 50: 0, 100: 0, 500: 0, 1000: 0});
  });

  it('The greatest possible sum.', () => {
    const atm = new ATM({30: 10, 50: 10, 100: 5, 500: 3, 1000: 2});
    expect(atm.getMoney(4800)).toEqual({30: 10, 50: 10, 100: 5, 500: 3, 1000: 2});
});

  it('Should return false if no money', () => {
    const atm = new ATM({30: 10, 50: 10, 100: 5, 500: 3, 1000: 2});
    atm.getMoney(4800);

    expect(atm.getMoney(30)).not.toBeTruthy();
  });

  it('Should return the least amount of notes.', () => {
    const atm = new ATM({30: 10, 50: 10, 100: 5, 500: 3, 1000: 2});
    expect(atm.getMoney(870)).toEqual({30: 4, 50: 1, 100: 2, 500: 1, 1000: 0});
  });

  it('Should change self state.', () => {
    const atm = new ATM({30: 10, 50: 10, 100: 5, 500: 3, 1000: 2});
    expect(atm.getMoney(870)).toEqual({30: 4, 50: 1, 100: 2, 500: 1, 1000: 0});
    expect(atm.getMoney(130)).toEqual({30: 1, 50: 0, 100: 1, 500: 0, 1000: 0});
    expect(atm.getMoney(330)).toEqual({30: 1, 50: 2, 100: 2, 500: 0, 1000: 0});
    expect(atm.getMoney(2560)).toEqual({30: 2, 50: 0, 100: 0, 500: 1, 1000: 2});
    expect(atm.getMoney(90)).not.toBeTruthy();
    expect(atm.getMoney(1000)).not.toBeTruthy();
  });
});
