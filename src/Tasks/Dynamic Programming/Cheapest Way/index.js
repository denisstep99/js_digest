function cheapestWay(data) {
  const [width, height] = [data[0].length, data.length];

  data.unshift(Array.from({length: width}, (v, i) => i === 0 ? 0 : Infinity));
  data.forEach((arr) => arr.unshift(Infinity));

  for (let j = 1; j <= width; j++) {
    for (let i = 1; i <= height; i++) {
      data[i][j] = Math.min(data[i - 1][j], data[i][j - 1]) + data[i][j];
    }
  }
  return data[height][width]
}

module.exports = cheapestWay;
