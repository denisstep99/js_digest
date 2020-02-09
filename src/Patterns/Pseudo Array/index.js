const evenNumbers = new Proxy([], {
  get(target, index) {return index * 2},
  has(target, number) {return !(number % 2)}
});

const oddNumbers = new Proxy([], {
  get(target, index) {return Math.sign(index) ? index * 2 - Math.sign(index) : undefined},
  has(target, number) {return number % 2}
});

module.exports = {evenNumbers, oddNumbers};
