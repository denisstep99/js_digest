const Comparator = require("../utils/Comparator/Comparator");

/**
 * Binary Search v1
 * Time Complexity: O(log(n))
 *
 * @param data an array of numbers.
 * @param num - number for searching.
 * @param {function(a, b)} [comparatorCallback]
 *
 * @return {number}
 */

function binarySearch1(data, num, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);
  let
    left = 0,
    right = data.length - 1;

  while (left < right) {
    const newPos = Math.floor((left + right) / 2);

    if (comparator.lessThan(data[newPos], num)) {
      left = newPos + 1;
    } else {
      right = newPos;
    }
  }

  return data[right] && comparator.equal(data[right], num) ? right : -1;
}

/**
 * Binary Search v2
 * Time Complexity: O(log(n))
 *
 * @param data an array of numbers.
 * @param num - number for searching.
 * @param {function(a, b)} [comparatorCallback]
 *
 * @return {number}
 */


function binarySearch2(data, num, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);
  let
    startIndex = 0,
    endIndex = data.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (comparator.equal(data[middleIndex], num)) {
      return middleIndex;
    }

    if (comparator.lessThan(data[middleIndex], num)) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}


module.exports = {
  v1: binarySearch1,
  v2: binarySearch2
};
