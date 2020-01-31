const Comparator = require('../../Searches/utils/Comparator/Comparator');

function sort(data, compareFunction) {
  if(data.length <= 1) {
    return data;
  }
  const comparator = new Comparator(compareFunction);
  const middleIndex = Math.floor(data.length / 2);
  const firstPart = sort(data.slice(0, middleIndex), compareFunction);
  const secondPart = sort(data.slice(middleIndex), compareFunction);
  let resultArray = [];

  let
    firstIndex = 0,
    secondIndex = 0;

  while (firstIndex < firstPart.length && secondIndex < secondPart.length) {
    if (comparator.lessThanOrEqual(firstPart[firstIndex], secondPart[secondIndex])) {
      resultArray.push(firstPart[firstIndex++]);
    } else {
      resultArray.push(secondPart[secondIndex++]);
    }
  }

  if(firstIndex < firstPart.length) {
    resultArray = resultArray.concat(firstPart.slice(firstIndex));
  }
  if(secondIndex < secondPart.length) {
    resultArray = resultArray.concat(secondPart.slice(secondIndex));
  }

  return resultArray;
}

module.exports = sort;
