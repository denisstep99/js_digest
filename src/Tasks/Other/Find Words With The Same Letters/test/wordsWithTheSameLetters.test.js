const expect = require('expect');
const groupWords = require('../index');

describe('Group words with the same letters', () => {
    it('Common tests', () => {
        expect(groupWords([])).toEqual([]);
        expect(groupWords(['eat', 'ate', 'tea'])).toEqual([['eat', 'ate', 'tea']]);

        expect(groupWords(['eat', 'ate', 'tea', 'foo', 'boo', 'ofo', 'oob', 'hill'])).toEqual([['eat', 'ate', 'tea'], ['foo', 'ofo'], ['boo', 'oob'], ['hill']]);

    });
});