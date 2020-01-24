/**
 * @param n - integer
 */

function factorial1(n) {
  if (n < 1) {
    return 1
  }

  return n * factorial1(n -1);
}

/**
 * @param n - integer
 */

function factorial2(n) {
  return ~~(n < 1) || factorial2(n - 1) * n;
}


module.exports = {
  v1: factorial1,
  v2: factorial2
};
