const expect = require('expect');
const BinaryTree = require('../index');
const BinaryTreeNode = require('../BinaryTreeNode');

function createTree() {
  return new BinaryTree(new BinaryTreeNode(10)
    .setLeft(
      new BinaryTreeNode(12)
        .setLeft(new BinaryTreeNode(14))
        .setRight(new BinaryTreeNode(13))
    )
    .setRight(
      new BinaryTreeNode(112)
        .setLeft(new BinaryTreeNode(114))
        .setRight(new BinaryTreeNode(113))
    ));
}

describe('Binary Tree', () => {
  const tree = createTree();

  it('GetNodeByPath should return the right value', () => {
    expect(tree.getNodeByPath('')).toBe(10);
    expect(tree.getNodeByPath('l')).toBe(12);
    expect(tree.getNodeByPath('L')).toBe(12);
    expect(tree.getNodeByPath('r')).toBe(112);
    expect(tree.getNodeByPath('R')).toBe(112);

    expect(tree.getNodeByPath('RL')).toBe(114);
    expect(tree.getNodeByPath('LR')).toBe(13);
    expect(tree.getNodeByPath('RRRR')).toBeNull();
    expect(tree.getNodeByPath('RRL')).toBeNull();

    expect(() => tree.getNodeByPath('fdsfas')).toThrow();
  });

  it('SetNodeByPath should set your value', () => {
    const tree = createTree();

    tree.setNodeByPath('l', 6);
    tree.setNodeByPath('R', 19);

    tree.setNodeByPath('lR', 90);
    tree.setNodeByPath('RRR', 9000);
    tree.setNodeByPath('LLLL', 80000);

    expect(tree.getNodeByPath('L')).toBe(6);
    expect(tree.getNodeByPath('R')).toBe(19);
    expect(tree.getNodeByPath('RRR')).toBe(9000);
    expect(tree.getNodeByPath('RRL')).toBeNull();
    expect(tree.getNodeByPath('LLLL')).toBeNull();
  });

  it('SetNodeByPath should set your node', () => {
    const tree = createTree();

    tree.setNodeByPath('lR', new BinaryTreeNode(899));
    tree.setNodeByPath('RRR', new BinaryTreeNode(299));
    tree.setNodeByPath('LLLL', new BinaryTreeNode(899));

    expect(tree.getNodeByPath('lR')).toBe(899);
    expect(tree.getNodeByPath('RRR')).toBe(299);
    expect(tree.getNodeByPath('RRL')).toBeNull();
    expect(tree.getNodeByPath('LLLL')).toBeNull();
  });
});
