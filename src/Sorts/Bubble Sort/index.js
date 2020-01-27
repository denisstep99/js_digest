const Comparator = require('../../Searches/utils/Comparator/Comparator');

function bubbleSort(data, compareFunction) {
  const comparator = new Comparator(compareFunction);

  data = [...data];

  for (let i = 0; i < data.length; i++) {
    // Flag that holds info about whether the swap has occur or not.
    let swapped = false;

    for (let j = 1; j < data.length - i; j++) {
      if (comparator.greaterThan(data[j - 1], data[j])) {
        swapped = true;
        [data[j - 1], data[j]] = [data[j], data[j - 1]];
      }
    }

    if (!swapped) return data;
  }

  // If there were no swaps then array is already sorted and there is
  // no need to proceed.
  return data;
}

module.exports = bubbleSort;
