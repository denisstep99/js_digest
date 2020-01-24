function range1(start, stop, step) {
  if (stop === undefined) {
    [start = 0, stop] = [stop, start];
  }

  const sign = Math.sign(stop - start);

  if (step === undefined) {
    step = sign;
  }

  if (step * sign <= 0) {
    return [];
  }
  const length = Math.abs(Math.floor(ceilToFixed(stop - start, step) / step));

  return Array.from({length}, (value, index) => start + index * step);
}


function ceilToFixed(num, exponent) {
  exponent = Math.abs(exponent);
  if (exponent < 1) {
    exponent = 10 ** Math.ceil(Math.log10(exponent));
  } else {
    exponent = 1;
  }

  return Math.ceil(num / exponent) * exponent;
}

function range2(start, stop, step) {
  function* rangeGenerator(start, stop, step) {
    if (stop === undefined) [start, stop] = [0, start];
    const sign = Math.sign(stop - start);
    if (step === undefined) {
      step = sign || 1;
    }
    if (step > 0) {
      while (start < stop) {
        yield start;
        start += step;
      }
    } else if (step < 0) {
      while (start > stop) {
        yield start;
        start += step;
      }
    } else {
      throw new RangeError('range() step argument invalid');
    }
  }

  return [...rangeGenerator(start, stop, step)];
}

module.exports = {
  v1: range1,
  v2: range2
};
