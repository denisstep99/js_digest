const expect = require('expect');
const range = require('./range');

/**Array.from
 * Creates an array from an iterable object.
 * @param iterable An iterable object to convert to an array.
 * @param mapfn A mapping function to call on every element of the array.
 * @param thisArg Value of 'this' used to invoke the mapfn.
 *
 * Array.from({length: 10000}); - создает массив из 10000 элементов, каждый заполнен как undefined
 * [...Array(10000)]; - создает массив из 10000 элементов, каждый заполнен как undefined
 *
 * Array.from({length: 10000}, (v, i) => i); - создает массив из 10000 элементов, от 0 до 10000
 * [...Array(10000).keys()]; - создает массив из 10000 элементов, от 0 до 10000
 */

describe('Array creation', () => {
  it('Creating an empty array with a fixed length', () => {
    /*--------------------------------*/
    const array = Array.from({length: 5});
    /*--------------------------------*/

    expect(array.length).toBe(5);
    expect(array).toEqual([undefined, undefined, undefined, undefined, undefined,]);
  });

  it('Creating a fixed-length array filled with a specific value', () => {
    const value = 55;
    /*--------------------------------*/
    const array = Array.from({length: 5}, () => value);
    /*--------------------------------*/

    expect(array.length).toBe(5);
    expect(array).toEqual([55, 55, 55, 55, 55]);
  });

  it('Creating a fixed-length array filled with a specific value (second variant)', () => {
    const value = 55;
    /*--------------------------------*/
    const array = Array(5).fill(value);
    /*--------------------------------*/

    expect(array.length).toBe(5);
    expect(array).toEqual([55, 55, 55, 55, 55]);
  });

  it('Creating a fixed-length array filled with nums from 0 to length - 1', () => {
    /*--------------------------------*/
    const array = Array.from({length: 5}, (value, index) => index);
    /*--------------------------------*/

    expect(array.length).toBe(5);
    expect(array).toEqual([0, 1, 2, 3, 4]);
  });

  it('Creating a fixed-length array filled with nums from 0 to length - 1 (second variant)', () => {
    /*--------------------------------*/
    const array = [...Array(5).keys()];
    /*--------------------------------*/

    expect(array.length).toBe(5);
    expect(array).toEqual([0, 1, 2, 3, 4]);
  });

  describe('Range function', () => {
    it('With one argument', () => {
      expect(range.v1(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(range.v1(0)).toEqual([]);
      expect(range.v1(3.2)).toEqual([0, 1, 2, 3]);
      expect(range.v1(-4)).toEqual([0, -1, -2, -3]);
    });

    it('With two arguments', () => {
      expect(range.v1(-4, 0)).toEqual([-4, -3, -2, -1]);
      expect(range.v1(4, 10)).toEqual([4, 5, 6, 7, 8, 9]);
      expect(range.v1(-2, 3)).toEqual([-2, -1, 0, 1, 2]);
      expect(range.v1(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(range.v1(0.5, 3)).toEqual([0.5, 1.5, 2.5]);
      expect(range.v1(-2.5, 3)).toEqual([-2.5, -1.5, -0.5, 0.5, 1.5, 2.5]);
    });

    it('With three arguments', () => {
      expect(range.v1(-4, 0, 1)).toEqual([-4, -3, -2, -1]);
      expect(range.v1(4, 6, 0.5)).toEqual([4, 4.5, 5, 5.5]);
      expect(range.v1(-2, 3, 0)).toEqual([]);
      expect(range.v1(0, 4, -1)).toEqual([]);
      expect(range.v1(3, 0, -0.5)).toEqual([3, 2.5, 2, 1.5, 1, 0.5]);
    });
  });

  describe('Range function (version 2)', () => {
    it('With one argument', () => {
      expect(range.v2(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(range.v2(0)).toEqual([]);
      expect(range.v2(3.2)).toEqual([0, 1, 2, 3]);
      expect(range.v2(-4)).toEqual([0, -1, -2, -3]);
    });

    it('With two arguments', () => {
      expect(range.v2(-4, 0)).toEqual([-4, -3, -2, -1]);
      expect(range.v2(4, 10)).toEqual([4, 5, 6, 7, 8, 9]);
      expect(range.v2(-2, 3)).toEqual([-2, -1, 0, 1, 2]);
      expect(range.v2(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(range.v2(0.5, 3)).toEqual([0.5, 1.5, 2.5]);
      expect(range.v2(-2.5, 3)).toEqual([-2.5, -1.5, -0.5, 0.5, 1.5, 2.5]);
    });

    it('With three arguments', () => {
      expect(range.v2(-4, 0, 1)).toEqual([-4, -3, -2, -1]);
      expect(range.v2(4, 6, 0.5)).toEqual([4, 4.5, 5, 5.5]);
      expect(() => {range.v2(-2, 3, 0)}).toThrow();
      expect(range.v2(0, 4, -1)).toEqual([]);
      expect(range.v2(3, 0, -0.5)).toEqual([3, 2.5, 2, 1.5, 1, 0.5]);
    });
  });
});

