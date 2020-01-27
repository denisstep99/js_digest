/**
 * permutations with repetitions v1
 *
 * @param data - array with elements for permutations with repetitions
 * @param length
 * @returns {*}
 */

function permutation1(data, length = data.length) {
  if (length <= 1) {
    return data.map(value => [value]);
  }

  const smallerPermutations = permutation1(data, length - 1);
  return smallerPermutations
    .map((value) => data.map((dataValue) => value.concat(dataValue)))
    .flat();
}


/**
 * permutations with repetitions v2
 *
 * @param data - array with elements for permutations with repetitions
 * @param length
 * @returns {*}
 */

function permutation2(data, length = data.length) {
  if (length <= 1) {
    return data.map(value => [value]);
  }

  let resultArray = [];
  const smallerPermutations = permutation2(data, length - 1);

  smallerPermutations.forEach((permutation) => {
    data.forEach((value) => {
      resultArray.push(permutation.concat(value));
    });
  });

  return resultArray;
}


module.exports = {
  v1: permutation1,
  v2: permutation2
};
