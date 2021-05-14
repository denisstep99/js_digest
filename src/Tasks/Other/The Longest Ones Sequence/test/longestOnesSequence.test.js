const expect = require('expect');
const getLength = require('../index');

describe('The Longest Ones Sequence', () => {
    it('Common tests', () => {
        expect(getLength([])).toBe(0);
        expect(getLength([1,1,1,1])).toBe(4);
        expect(getLength([0,0,0])).toBe(0);

        expect(getLength([0,1,0,1,0])).toBe(2);
        expect(getLength([0,1,1,1,0,0,1,1,1,1])).toBe(4);
        expect(getLength([0,1,1,1,0,1,1,1,0,1,1,1,1,0])).toBe(7);
    });
});