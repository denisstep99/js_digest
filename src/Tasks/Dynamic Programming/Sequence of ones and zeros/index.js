function count(n) {
  let a, b = a = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [a + b, a];
  }
  return a;
}

module.exports = count;
