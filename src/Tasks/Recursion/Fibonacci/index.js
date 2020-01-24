/**
 * formula: {f(n) = f(n - 1) + f(n - 2), f(1) = 1, f(2) = 1}
 *
 * @param n - index number
 * @returns {*}
 */

function fibonacci1(n) {
  if (n === 1 || n === 2) return 1;
  return fibonacci1(n - 1) + fibonacci1(n - 2)
}

function fibonacci2(n) {
  fibonacci2.cache || (fibonacci2.cache = {1: 1, 2: 1});
  return fibonacci2.cache[n] || (fibonacci2.cache[n] = fibonacci2(n - 1) + fibonacci2(n - 2));
}

function fibonacci3(n, last = 1, beforelast = 0) {
  if (n < 1) return beforelast;
  return fibonacci3(n - 1, last + beforelast, last);
}

module.exports = {
  v1: fibonacci1,
  v2: fibonacci2,
  v3: fibonacci3
};
