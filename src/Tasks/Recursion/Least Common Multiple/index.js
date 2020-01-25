const gcd = require('../Euclidean Algorithm');

module.exports = function lcm(number1, number2) {
  return (number1 * number2 / gcd(number1, number2));
};
