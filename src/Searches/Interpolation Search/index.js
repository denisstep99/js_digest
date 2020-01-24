const Comparator = require("../utils/Comparator/Comparator");

/**
 * Interpolation Search v1
 * Time Complexity: O(log(log(n)))
 *
 * @param data an array of numbers.
 * @param num - number for searching.
 *
 * @return {number}
 */

function interpolationSearch1(data, num) {
  let
    left = 0,
    right = data.length - 1;

  while(left < right && num > data[left]) {

    let newPos = Math.floor(left + (num - data[left]) * (right - left) / (data[right] - data[left]));
    if(data[newPos] === num) {
      return newPos;
    }
    if (data[newPos] < num) {
      left = newPos + 1;
    } else {
      right = newPos;
    }
  }

  return data[left] && data[left] === num ? left : -1;
}


/**
 * Interpolation Search v2
 * https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/search/interpolation-search/interpolationSearch.js
 *
 * Time Complexity: O(log(log(n)))
 *
 * @param sortedArray an array of numbers.
 * @param seekElement - number for searching.
 *
 * @return {number}
 */

function interpolationSearch2(sortedArray, seekElement) {
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;

  while (leftIndex <= rightIndex) {
    const rangeDelta = sortedArray[rightIndex] - sortedArray[leftIndex];
    const indexDelta = rightIndex - leftIndex;
    const valueDelta = seekElement - sortedArray[leftIndex];

    // If valueDelta is less then zero it means that there is no seek element
    // exists in array since the lowest element from the range is already higher
    // then seek element.
    if (valueDelta < 0) {
      return -1;
    }

    // If range delta is zero then subarray contains all the same numbers
    // and thus there is nothing to search for unless this range is all
    // consists of seek number.
    if (!rangeDelta) {
      // By doing this we're also avoiding division by zero while
      // calculating the middleIndex later.
      return sortedArray[leftIndex] === seekElement ? leftIndex : -1;
    }

    // Do interpolation of the middle index.
    const middleIndex = leftIndex + Math.floor(valueDelta * indexDelta / rangeDelta);

    // If we've found the element just return its position.
    if (sortedArray[middleIndex] === seekElement) {
      return middleIndex;
    }

    // Decide which half to choose for seeking next: left or right one.
    if (sortedArray[middleIndex] < seekElement) {
      // Go to the right half of the array.
      leftIndex = middleIndex + 1;
    } else {
      // Go to the left half of the array.
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
}
module.exports = {v1: interpolationSearch1, v2: interpolationSearch2};
