const Comparator = require('../../Searches/utils/Comparator/Comparator');

module.exports = class Heap {
  constructor(nodeArray = [], compareFunction) {
    this.comparator = new Comparator(compareFunction);
    this.nodeArray = Array.from(nodeArray);

    for (let i = Math.floor(this.size / 2); i >= 0; i--) {
      this.normalize(i);
    }
  }

  get size() {
    return this.nodeArray.length;
  }

  get max() {
    return this.nodeArray[0];
  }

  add(node) {
    let currentPosition = this.size;
    let parent = Math.floor((currentPosition - 1) / 2);

    this.nodeArray.push(node);

    while (currentPosition > 0 &&
      this.comparator.greaterThan(this.nodeArray[currentPosition], this.nodeArray[parent])
      ) {
      [this.nodeArray[currentPosition], this.nodeArray[parent]] =
        [this.nodeArray[parent], this.nodeArray[currentPosition]];

      currentPosition = parent;
      parent = Math.floor((currentPosition - 1) / 2);
    }
  }

  normalize(index = 0) {
    while (true) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      let maxElement = index;

      if (leftChild < this.size &&
        this.comparator.greaterThan(this.nodeArray[leftChild], this.nodeArray[maxElement])
      ) {
        maxElement = leftChild;
      }

      if (rightChild < this.size &&
        this.comparator.greaterThan(this.nodeArray[rightChild], this.nodeArray[maxElement])
      ) {
        maxElement = rightChild;
      }

      if (maxElement === index) {
        break;
      }

      [this.nodeArray[maxElement], this.nodeArray[index]] =
        [this.nodeArray[index], this.nodeArray[maxElement]];

      index = maxElement;
    }
  }

  popMax() {
    const max = this.nodeArray[0];
    this.nodeArray[0] = this.nodeArray[this.size - 1];
    this.nodeArray.length--;

    this.normalize();

    return max;
  }
};
