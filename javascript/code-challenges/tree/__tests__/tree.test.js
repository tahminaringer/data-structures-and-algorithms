'use strict';

const {Node, BinarySearchTree} = require('../tree');

describe('Bianary Trees', () => {
  describe('Node Constructor', () => {
    it('Can successfully instantiates a new node', () => {
      let node = new Node(8);
      expect(node.left).toBeNull();
      expect(node.right).toBeNull();
      expect(node.value).toBe(8);
    });
  });

  describe('Binary Search Tree', () => {
    it('Can instantiate an empty tree', () => {
      let tree = new BinarySearchTree();
      expect(tree.root).toBeNull();
    });
    it('add() can instantiate a new node', () => {
      let tree = new BinarySearchTree();
      tree.add(3);
      expect(tree.root.value).toBe(3);
    });
    it('Can successfully add a left child and right child to a single root node', () => {
      let tree = new BinarySearchTree();
      tree.add(3);
      tree.add(1);
      tree.add(5);
      expect(tree.root.value).toBe(3);
      expect(tree.root.left.value).toBe(1);
      expect(tree.root.right.value).toBe(5);
    });
  });

  describe('Binary Tree', () => {
    it('successfully return null on BinaryTree methods if called on an empty tree', () => {
      let tree = new BinarySearchTree();
      let preOrder = tree.preOrder();
      let inOrder = tree.inOrder();
      let postOrder = tree.postOrder();
      let maxValue = tree.findMaxValue();
      expect(preOrder).toBeNull();
      expect(inOrder).toBeNull();
      expect(postOrder).toBeNull();
      expect(maxValue).toBeNull();
    });

    it('Can successfully return a collection from a preorder traversal', () => {
      let tree = new BinarySearchTree();
      tree.add(4);
      tree.add(2);
      tree.add(6);
      tree.add(1);
      tree.add(3);
      tree.add(5);
      let maxValue = tree.findMaxValue();
      expect(maxValue).toEqual(6);
    });

    it('Can successfully return a collection from a preorder traversal', () => {
      let tree = new BinarySearchTree();
      tree.add(4);
      tree.add(2);
      tree.add(6);
      tree.add(1);
      tree.add(3);
      tree.add(5);
      let preOrder = tree.preOrder();
      expect(preOrder).toEqual([4, 2, 1, 3, 6, 5]);
    });
    it('Can successfully return a collection from a inorder traversal', () => {
      let tree = new BinarySearchTree();
      tree.add(4);
      tree.add(2);
      tree.add(6);
      tree.add(1);
      tree.add(3);
      tree.add(5);
      let inOrder = tree.inOrder();
      expect(inOrder).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it('Can successfully return a collection from a postorder traversal', () => {
      let tree = new BinarySearchTree();
      tree.add(4);
      tree.add(2);
      tree.add(6);
      tree.add(1);
      tree.add(3);
      tree.add(5);
      let postOrder = tree.postOrder();
      expect(postOrder).toStrictEqual([1, 3, 2, 5, 6, 4]);
    });
    it('Successfully returns true with method contains()', () => {
      let tree = new BinarySearchTree();
      tree.add(4);
      tree.add(2);
      tree.add(6);
      tree.add(1);
      tree.add(3);
      tree.add(5);
      let postOrder = tree.contains(4);
      expect(postOrder).toBe(true);
    });
    it('Successfully returns false with method contains() on value that does not exist', () => {
      let tree = new BinarySearchTree();
      tree.add(4);
      tree.add(2);
      tree.add(6);
      tree.add(1);
      tree.add(3);
      tree.add(5);
      let postOrder = tree.contains(7);
      expect(postOrder).toBe(false);
    });
  });
});


