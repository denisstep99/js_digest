const chance = require('chance')();

/**Array.from
 * Creates an array from an iterable object.
 * @param iterable An iterable object to convert to an array.
 * @param mapfn A mapping function to call on every element of the array.
 * @param thisArg Value of 'this' used to invoke the mapfn.
 *
 * Array.from({length: 10000}); - создает массив из 10000 элементов, каждый заполнен как undefined
 * [...Array(10000)]; - создает массив из 10000 элементов, каждый заполнен как undefined
 *
 * Array.from({length: 10000}, (i, p) => i); - создает массив из 10000 элементов, от 0 до 10000
 * [...Array(10000).keys()]; - создает массив из 10000 элементов, от 0 до 10000
 */

module.exports = Array.from({length: 10000}, chance.integer.bind(chance, {min: -10000, max: 10000}));
