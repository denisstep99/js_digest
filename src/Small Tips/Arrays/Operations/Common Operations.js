const expect = require('expect');


describe('Arrays common operations', () => {
  it('Intersection', () => {
    function intersect(arr1, arr2) {
      const resultArray = [];
      const sortedArr1 = arr1.sort();
      const sortedArr2 = arr2.sort();

      for (let firstIndex = 0, secondIndex = 0; firstIndex < sortedArr1.length && secondIndex < sortedArr2.length;) {
        if (sortedArr1[firstIndex] < sortedArr2[secondIndex]) {
          firstIndex++;
        } else if (sortedArr1[firstIndex] > sortedArr2[secondIndex]) {
          secondIndex++;
        } else {
          resultArray.push(sortedArr1[firstIndex]);
          firstIndex++;
          secondIndex++;
        }
      }

      return resultArray;
    }

    expect(intersect([1, 2, 3, 4, 5, 6, 7], [2, 5, 8, 9, 1])).toEqual([1, 2, 5]);
    expect(intersect([1, 1, 1, 1, 5, 6, 7], [1, 1, 8, 5, 1])).toEqual([1, 1, 1, 5]);
  });

  it('Union', () => {
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [6, 7, 8];
    const arr3 = [8, 9, 10];

    expect(arr1.concat(arr2, arr3)).toEqual([1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 10]);
  });

  it('Only element', () => {
    /**
     *
     * @param arr - arrays, elements or iterable objects
     * @returns {[string, any]}
     */
    function only(...arr) {
      const elements = arr.flat(Infinity);
      const elementsCount = Object.create(null);

      elements.forEach((value) => {
        elementsCount[value] = ~~elementsCount[value] + 1;
      });

      return Object.entries(elementsCount).reduce((previousValue, currentValue) => {
        if (currentValue[1] === 1) {
          previousValue.push(Number(currentValue[0]));
        }

        return previousValue;
      }, []);
    }

    expect(only([1, 2, 3], [2, 3], [5, 6], [7, 6])).toEqual([1, 5, 7]);
    expect(only([], [], [])).toEqual([]);
    expect(only([], [], [1])).toEqual([1]);
    expect(only([1], [], [1])).toEqual([]);
    expect(only([1, 2, 1], [2, 3, 4], [3, 4, 5])).toEqual([5]);

    expect(only([1, 2, 3, 4], 1, 2, 6, 7)).toEqual([3, 4, 6, 7]);
    expect(only(1, 2, 3, 4, 1, 2, [3, 7])).toEqual([4, 7]);
  });
});
