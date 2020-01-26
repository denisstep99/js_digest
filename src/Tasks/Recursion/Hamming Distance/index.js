function distance(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    throw new Error('Strings must be the same length!');
  }

  if (firstString.length <= 1) {
    return ~~(firstString !== secondString);
  }

  if (firstString.charCodeAt(0) !== secondString.charCodeAt(0)) {
    return 1 + distance(firstString.slice(1), secondString.slice(1));
  }

  return distance(firstString.slice(1), secondString.slice(1));
}

module.exports = distance;
