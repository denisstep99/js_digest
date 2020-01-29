/**
 * @param str
 */
function isPalindrome(str) {
  return checkPalindrome(str.replace(/[^А-ЯёЁа-яA-Za-z0-9]/g, '').toLowerCase());
}

function checkPalindrome(str) {
  if(str.length < 2) {
    return true;
  }
  return str.charAt(0) === str.charAt(str.length - 1) && checkPalindrome(str.slice(1, -1))
}

module.exports = isPalindrome;
