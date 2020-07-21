const expect = require('expect');
const compress = require('../index');

describe('String compression function', () => {
    it('Common tests', () => {
        expect(compress("")).toBe("");
        expect(compress("a")).toBe("a1");
        expect(compress("aaa")).toBe("a3");
        expect(compress("aaassbbe")).toBe("a3s2b2e1");
    });
});