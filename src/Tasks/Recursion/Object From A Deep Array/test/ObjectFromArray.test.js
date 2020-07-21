const expect = require('expect');
const getObject = require('../index');

describe('Object from an array', () => {
    it('Common tests', () => {
        expect(getObject([["name", "Denis"]])).toEqual({name: "Denis"});
        expect(getObject([
            ["name", "Denis"],
            ["address", [["street", "Lenina"], ["building", 45]]]
        ])).toEqual({name: "Denis", "address.street": "Lenina", "address.building": 45});

        expect(() => getObject([["", "Denis"]])).toThrow();
    });
});