const BinaryTree = require('../../../../../Structures/Binary Tree/index');
const BinaryTreeNode = require('../../../../../Structures/Binary Tree/BinaryTreeNode');
const findSum = require('../index');
const expect = require('expect');

function createTree() {
  return new BinaryTree(new BinaryTreeNode(10)
    .setLeft(
      new BinaryTreeNode(20)
        .setLeft(new BinaryTreeNode(15))
        .setRight(new BinaryTreeNode(5))
    )
    .setRight(
      new BinaryTreeNode(0)
        .setLeft(new BinaryTreeNode(35))
        .setRight(new BinaryTreeNode(25))
    ));
}

describe('Binary Tree Sum Of Leaves', () => {
  const tree = createTree();

  it('Common test', () => {
    expect(findSum(tree)).toBe(110);
  });
});
