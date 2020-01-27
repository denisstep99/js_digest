const standardBrackets = [
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
  ['<', '>']
];

/**
 * version 1
 * for one type of brackets
 *
 * @param str
 * @param brackets
 * @returns {boolean}
 */
function checkBrackets(str, brackets = standardBrackets) {
  if (brackets.length === 2) {
    return validBrackets(str, brackets);
  }
  return brackets.every(validBrackets.bind(this, str));
}

function validBrackets(str, brackets) {
  let checkSum = 0;
  for (let letter of str) {
    const bracketType = brackets.indexOf(letter);
    checkSum += bracketType !== -1 ? !bracketType - bracketType : 0;
    if (checkSum < 0) {
      return false;
    }
  }
  return !checkSum;
}

/**
 * version 2
 * for all brackets
 *
 * @param str
 * @param brackets
 * @returns {boolean}
 */
function checkBrackets2(str, brackets = standardBrackets) {
  str = str.replace(new RegExp(`\[^${brackets.flat().join('\\')}]`, 'g'), '');
  if (str.length % 2) {
    return false
  }

  const stack = [];
  const bracketsDict = Object.fromEntries(
    brackets.map(brackets => [brackets[1], brackets[0]])
  );

  Array.prototype.forEach.call(str, (value) => {
    if (stack.length > 0 && bracketsDict[value] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(value);
    }
  });

  return !stack.length;
}

module.exports = {v1: checkBrackets, v2: checkBrackets2};
