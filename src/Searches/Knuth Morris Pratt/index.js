function createPrefixNote(stringPattern) {
  const stringLength = stringPattern.length;
  const prefixArray = Array(stringLength).fill(0);

  for (let i = 0, j = 1; j < stringLength;) {
    if (stringPattern[i] === stringPattern[j]) {
      prefixArray[j] = i + 1;

      j = j + 1;
      i = i + 1;
    } else if (i === 0) {
      prefixArray[j] = 0;

      j = j + 1;
    } else {
      i = prefixArray[i - 1];
    }
  }

  return prefixArray;
}


function find(string, stringPattern) {
  if (stringPattern.length === 0) {
    return 0;
  }

  const prefixArray = createPrefixNote(stringPattern);

  let i, j = i = 0;

  while (j < stringPattern.length && i < string.length) {
    if (stringPattern[j] === string[i]) {
      i = i + 1;
      j = j + 1;
      if (j === stringPattern.length) {
        return i - stringPattern.length;
      }
    } else if (j === 0) {
      i = 1 + i;
    } else {
      j = prefixArray[j - 1];
    }
  }

  return -1;
}


module.exports = find;
