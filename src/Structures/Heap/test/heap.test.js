const Heap = require('../index');
const expect = require('expect');

function isCorrectHeap(heap) {
  const array = heap.nodeArray;
  const queue = [0];

  while (queue.length) {
    const currentIndex = queue.shift();
    const leftChildIndex = currentIndex * 2 + 1;
    const rightChildIndex = currentIndex * 2 + 2;

    if (
      (leftChildIndex < heap.size && heap.comparator.greaterThan(array[leftChildIndex], array[currentIndex])) ||
      (rightChildIndex < heap.size && heap.comparator.greaterThan(array[rightChildIndex], array[currentIndex]))
    ) {
      return false;
    }

    if (leftChildIndex < heap.size &&
      heap.comparator.greaterThanOrEqual(array[currentIndex], array[leftChildIndex])
    ) {
      queue.push(leftChildIndex);
    }

    if (rightChildIndex < heap.size &&
      heap.comparator.greaterThanOrEqual(array[currentIndex], array[rightChildIndex])
    ) {
      queue.push(rightChildIndex);
    }
  }

  return true;
}

describe('Heap structure', () => {
  it('Constructor should work correctly with one parameter', () => {
    const heap1 = new Heap([3, 4, 2, 3, 4, 100, 23, 12, 3, 5, 6, 73, 23, 43, 26]);
    const heap2 = new Heap([6]);
    const heap3 = new Heap([6, 6, 6, 6, 6, 6]);

    expect(isCorrectHeap(heap1)).toBeTruthy();
    expect(isCorrectHeap(heap2)).toBeTruthy();
    expect(isCorrectHeap(heap3)).toBeTruthy();
  });

  it('Constructor should work correctly with two parameters', () => {
    const heap1 = new Heap(['denis', 'Denis', 'Kate', 'Vladimir', 'Liza'], (str1, str2) => {
      if (str1 > str2) {
        return -1;
      }
      if (str1 < str2) {
        return 1;
      }
      return 0;
    });

    const heap2 = new Heap([
      {temperature: 12},
      {temperature: 22},
      {temperature: 11},
      {temperature: 4},
      {temperature: 8}
    ], (obj1, obj2) => {
      return obj2.temperature - obj1.temperature;
    });

    expect(isCorrectHeap(heap1)).toBeTruthy();
    expect(isCorrectHeap(heap2)).toBeTruthy();
  });

  it('Method popMax should return maximum and remove element from the heap', () => {
    const heap1 = new Heap(['Denis', 'Kate', 'Vladimir', 'Liza', 'denis'], (str1, str2) => {
      if (str1 > str2) {
        return -1;
      }
      if (str1 < str2) {
        return 1;
      }
      return 0;
    });

    const heap2 = new Heap([
      {temperature: 12},
      {temperature: 22},
      {temperature: 11},
      {temperature: 4},
      {temperature: 8}
    ], (obj1, obj2) => {
      return obj2.temperature - obj1.temperature;
    });

    let sortedArray1 = [];
    let sortedArray2 = [];

    while (heap1.size) {
      sortedArray1.push(heap1.popMax());
    }
    while (heap2.size) {
      sortedArray2.push(heap2.popMax());
    }

    expect(sortedArray1).toEqual(['Denis', 'Kate', 'Liza', 'Vladimir', 'denis',]);
    expect(sortedArray2).toEqual([
      {temperature: 4},
      {temperature: 8},
      {temperature: 11},
      {temperature: 12},
      {temperature: 22}
    ]);
  });
});
