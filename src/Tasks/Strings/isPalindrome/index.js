function isPalindrome(str) {
  str = str.replace(/[^A-Za-zА-Яа-яЁё0-9]/g, '').toLowerCase();

  for (let i = 0, stop = Math.floor(str.length / 2); i < stop; i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
