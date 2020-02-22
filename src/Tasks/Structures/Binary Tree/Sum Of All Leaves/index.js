module.exports = function findSum(tree) {
  let sum = 0;
  tree.forEach(e => sum+= e);
  return sum;
};
