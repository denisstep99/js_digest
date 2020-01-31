const Comparator = require('../../../Searches/utils/Comparator/Comparator');

function countReversesAndSort(data, compareFunction) {
  if (data.length < 2) {
    return {count: 0, data};
  }

  const comparator = new Comparator(compareFunction);
  const middleIndex = Math.floor(data.length / 2);

  let resultArray = [];
  let betweenCount = 0;
  let leftIndex = 0;
  let rightIndex = 0;

  const {count: leftCount, data: leftData } = countReversesAndSort(data.slice(0, middleIndex), compareFunction);
  const {count: rightCount, data: rightData } = countReversesAndSort(data.slice((middleIndex)), compareFunction);

  while(leftIndex < leftData.length, rightIndex < rightData.length) {
    if (comparator.lessThanOrEqual(leftData[leftIndex], rightData[rightIndex])) {
      resultArray.push(leftData[leftIndex++]);
      betweenCount += rightIndex;
    } else {
      resultArray.push(rightData[rightIndex++]);
    }
  }

  if (leftIndex < leftData.length) {
    betweenCount += (leftData.length - leftIndex) * rightData.length;
    resultArray = resultArray.concat(leftData.slice(leftIndex));
  }

  if (rightIndex < rightData.length) {
    resultArray = resultArray.concat(rightData.slice(rightIndex));
  }

  return {data: resultArray, count: leftCount + rightCount + betweenCount};
}

function countReverses(data, compareFunction) {
  return countReversesAndSort(data, compareFunction).count;
}

module.exports = countReverses;
