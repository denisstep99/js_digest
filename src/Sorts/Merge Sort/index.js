function sort(data) {
  if(data.length <= 1) {
    return data;
  }
  const middleIndex = Math.floor(data.length / 2);
  const firstPart = sort(data.slice(0, middleIndex));
  const secondPart = sort(data.slice(middleIndex));
  let resultArray = [];

  let
    firstIndex = 0,
    secondIndex = 0;

  while (firstIndex < firstPart.length && secondIndex < secondPart.length) {
    if (firstPart[firstIndex] < secondPart[secondIndex]) {
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
