const Comparator = require("../utils/Comparator/Comparator");

/**
 * Linear Search v1
 * Time Complexity: O(n)
 *
 * @param data an array of numbers.
 * @param num - number for searching.
 */

function linearSearch1(data, num) {
  for (let [index, value] of data.entries()) {
    if (value === num) {
      return index;
    }
  }

  return -1;
}

/**
 * Linear Search v2
 * Time Complexity: O(n)
 *
 * @param data an array of numbers.
 * @param num - number for searching.
 */

function linearSearch2(data, num) {
  let numPosition = -1;
  data.some((value, index) => value === num && ((numPosition = index) || 1));

  return numPosition;
}


/**
 * Linear Search v3
 * Time Complexity: O(n)
 *
 * @param data an array of numbers.
 * @param num - number for searching.
 * @param {function(a, b)} [comparatorCallback]
 */

function linearSearch3(data, num, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);
  const foundIndexes = [];

  data.forEach((value, index) => {
    if(comparator.equal(value, num)) {
      foundIndexes.push(index);
    }
  });

  return foundIndexes;
}

module.exports = {
  v1: linearSearch1,
  v2: linearSearch2,
  v3: linearSearch3
};
