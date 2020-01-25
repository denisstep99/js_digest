/**
 * @param number1 - first number
 * @param number2 - second number
 * @returns {*}
 */

module.exports = function gcd(number1, number2) {
  number1 = Math.abs(number1);
  number2 = Math.abs(number2);

  return (number2 === 0) ? number1 : gcd(number2, number1 % number2);
};
