const BinaryTreeNode = require("./BinaryTreeNode");

module.exports = class BinaryTree {
  constructor(topNode) {
    this.topNode = topNode;
  }

  setNodeByPath(path, node) {
    if (path.search(/[^RL]/gi) !== -1) {
      throw new Error('Invalid path');
    }

    const pathArr = path.toUpperCase().split('');
    const lastStep = pathArr.pop();

    const desiredNode = pathArr.reduce((accumulate, currentElement) => {
      if (accumulate === null) {
        return null;
      }
      if (currentElement.toUpperCase() === 'L') {
        return accumulate.left;
      }
      if (currentElement.toUpperCase() === 'R') {
        return accumulate.right;
      }
    }, this.topNode);

    if (desiredNode === null) {
      return this;
    }

    if (node instanceof BinaryTreeNode) {
      if (lastStep === 'L') {
        desiredNode.left = node;
      } else if (lastStep === 'R') {
        desiredNode.right = node;
      }
    } else {
      if (lastStep === 'L') {
        if (desiredNode.left) {
          desiredNode.left.value = node;
        } else {
          desiredNode.left = new BinaryTreeNode(node);
        }
      } else if (lastStep === 'R') {
        if (desiredNode.right) {
          desiredNode.right.value = node;
        } else {
          desiredNode.right = new BinaryTreeNode(node);
        }
      }
    }

    return this;
  }


  getNodeByPath(path) {
    if (path.search(/[^RL]/gi) !== -1) {
      throw new Error('Invalid path');
    }

    const pathArr = path.split('');

    const node = pathArr.reduce((accumulate, currentElement) => {
      if (accumulate === null) {
        return null;
      }
      if (currentElement.toUpperCase() === 'L') {
        return accumulate.left;
      }
      if (currentElement.toUpperCase() === 'R') {
        return accumulate.right;
      }
    }, this.topNode);

    return node && node.value;
  }

  map(func, node = this.topNode) {
    const newNode = new BinaryTreeNode(func(node.value));
    newNode.left = node.left && this.map(func, node.left);
    newNode.right = node.right && this.map(func, node.right);

    if (node === this.topNode) {
      return new BinaryTree(newNode);
    } else {
      return newNode;
    }
  }

  forEach(func, node = this.topNode) {
    func(node.value);
    node.left && this.map(func, node.left);
    node.right && this.map(func, node.right);
  }

  print() {
    this.forEach((e) => console.log(e));
  }
};
