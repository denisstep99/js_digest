const expect = require('expect');
const getIntersection = require('../index');

describe('Finding intersection with repetitions', () => {
    it('Common tests', () => {
        expect(getIntersection([], [])).toEqual([]);
        expect(getIntersection([1,1,1], [1,2,3])).toEqual([1]);
        expect(getIntersection([1,2,3,4,5], [])).toEqual([]);

        expect(getIntersection([1,1,1], [1,1,1])).toEqual([1,1,1]);
        expect(getIntersection([1,1,2,2,3,4,5,1,1,2,3,4,5], [2,2,1,6,4,3,2,1,2,1])).toEqual([1,1,1,2,2,2,3,4]);
        expect(getIntersection([1,2,0,0,0], [0,0,0,1,2])).toEqual([0,0,0,1,2]);
    });
});