const Comparator = require('../../Searches/utils/Comparator/Comparator');

function insertionSort(data, compareFunction) {
  const comparator = new Comparator(compareFunction);
  data = [...data];

  for (let i = 0; i < data.length; i++) {
    for (let j = i; j > 0; j--) {
      if (comparator.greaterThan(data[j - 1], data[j])) {
        [data[j - 1], data[j]] = [data[j], data[j - 1]];
      } else {
        break;
      }
    }
  }

  return data;
}

module.exports = insertionSort;
