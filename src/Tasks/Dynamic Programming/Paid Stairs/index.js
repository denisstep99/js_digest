function algorithm(data) {
  const length = data.length;

  let penultimate = data[0];
  let last = data[1];
  let current = data[1] || data[0];

  for (let i = 2; i < length; i++) {
    current = Math.min(last, penultimate) + data[i];
    [penultimate, last] = [last, current];
  }

  return current;
}

module.exports = algorithm;
