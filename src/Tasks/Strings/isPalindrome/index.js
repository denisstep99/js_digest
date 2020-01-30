function isPalindrome(str) {
  str = str.replace(/[^A-Za-zА-Яа-яЁё0-9]/g, '').toLowerCase();

  for (let left = 0, right = str.length - 1; left < right;) {
    if (str.charAt(left++) !== str.charAt(right--)) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
