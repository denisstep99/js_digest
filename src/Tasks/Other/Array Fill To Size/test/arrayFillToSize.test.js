const expect = require('expect');
const fillToSize = require('../index');

describe('Fill To Size Function', () => {
    it('Common tests', () => {
        const arr = [{name: "Vlad", age: 40}, {street: "Lenina"}, 3];

        expect(fillToSize(arr, 5).length).toBe(5);
        expect(fillToSize(arr, 5)).toEqual([{name: "Vlad", age: 40}, {street: "Lenina"}, 3, {
            name: "Vlad",
            age: 40
        }, {street: "Lenina"}]);
    });
});