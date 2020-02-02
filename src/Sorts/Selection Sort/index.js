const Comparator = require('../../Searches/utils/Comparator/Comparator');

function selectionSort(data, compareFunction) {
  data = [...data];
  const comparator = new Comparator(compareFunction);

  // should be data.length - 1, but works good.
  for (let i = 0; i < data.length; i++) {
    let minPos = i;
    for (let j = i + 1; j < data.length; j++) {
      if (comparator.lessThan(data[j], data[minPos])) {
        minPos = j;
      }
    }
    [data[i], data[minPos]] = [data[minPos], data[i]];
  }

  return data;
}

module.exports = selectionSort;
