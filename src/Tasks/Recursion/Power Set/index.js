function setPower(initArray) {
  if (initArray.length === 0) {
    return [[]];
  }

  const resultArray = setPower(initArray.slice(1));

  for (let i = 0, length = resultArray.length; i < length;) {
    resultArray.push(resultArray[i++].concat(initArray[0]));
  }

  return resultArray;
}

module.exports = setPower;
