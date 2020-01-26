/**
 * Hamming distance using Array.prototype.filter()
 *
 * @param firstString
 * @param secondString
 * @returns {string[]}
 */

function distance1(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    throw new Error('Strings must be the same length!');
  }

  return firstString
    .split('')
    .filter(((value, index) => value !== secondString.charAt(index)))
    .length;
}


/**
 * Hamming distance using for cycle
 *
 * @param firstString
 * @param secondString
 * @returns {string[]}
 */

function distance2(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    throw new Error('Strings must be the same length!');
  }

  let distance = 0;
  for(let i = 0; i < firstString.length; i++) {
    distance += ~~(firstString.charAt(i) !== secondString.charAt(i));
  }

  return distance;
}


/**
 * Hamming distance using spread operator and Array.prototype.reduce
 *
 * @param firstString
 * @param secondString
 * @returns {string[]}
 */

function distance3(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    throw new Error('Strings must be the same length!');
  }

  return [...firstString]
    .reduce(((previousValue, currentValue, currentIndex) =>
      previousValue + ~~(currentValue !== secondString.charAt(currentIndex))
    ), 0);
}

module.exports = {v1: distance1, v2: distance2, v3: distance3};
