const expect = require('expect');
const add = require('../index.js');

describe('Add Function', () => {
    it('Common tests', () => {
        expect(add() == 0).toBeTruthy();
        expect(add(0) == 0).toBeTruthy();
        expect(add(10) == 10).toBeTruthy();
        expect(add()()() == 0).toBeTruthy();
        expect(add(0)(5) == 5).toBeTruthy();
        expect(add(5) != 10).toBeTruthy();
    });
});