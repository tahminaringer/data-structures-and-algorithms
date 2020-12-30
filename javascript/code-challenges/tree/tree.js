'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMaxValue() {
    let maxValue = null;
    let preOrderArr = this.preOrder();

    for (let i=0; preOrderArr.length -1; i++) {
      if (preOrderArr[i] > maxValue) {
        maxValue = preOrderArr[i];
      }
    }
    return maxValue;
  }

  preOrder() {
    let array = [];
    let currentNode = this.root;

    if(!currentNode) {
      return null;
    } else {
      let preOrderTraversal = (currentNode) => {
        array.push(currentNode.value);
        if(currentNode.left) { preOrderTraversal(currentNode.left); } else { return null; }
        if(currentNode.right) { preOrderTraversal(currentNode.right); } else { return null; }
      };
      preOrderTraversal(currentNode);
      return array;
    }
  }

  inOrder() {
    let array = [];
    let currentNode = this.root;

    if(!currentNode) {
      return null;
    } else {
      let inOrderTraversal = (currentNode) => {
        if(currentNode.left) { inOrderTraversal(currentNode.left); }
        array.push(currentNode.value);
        if(currentNode.right) { inOrderTraversal(currentNode.right); }
      };
      inOrderTraversal(currentNode);
      return array;
    }
  }

  postOrder() {
    let array = [];
    let currentNode = this.root;

    if(!currentNode) {
      return null;
    } else {
      let postOrderTraversal = (currentNode) => {
        if(currentNode.left) { postOrderTraversal(currentNode.left); }
        if(currentNode.right) { postOrderTraversal(currentNode.right); }
        array.push(currentNode.value);
      };
      postOrderTraversal(currentNode);
      return array;
    }
  }

}

class BinarySearchTree extends BinaryTree {

  breadthFirst(tree) {

    if(!this.root) {
      return null;
    }else {
      let breadthFirstTraversal = (node) => {
        let queueArr = [];
        if (this.root) {
          this.root.value = queueArr[0];
          queueArr[0] = this.root.value;
          if (node.left){
            node.left = queueArr[0];
            queueArr[0] = node.left.value;
          }
        }else {
          breadthFirstTraversal(node);
          if (node.right){
            node.right = queueArr[0];
            queueArr[0] = node.right.value;
          } else {
            breadthFirstTraversal(node);
          }
          while(tree.length){
            if (node.left){
              node.left = this.root;
              this.root = node.left;
              if (node.left){
                node.left = queueArr[0];
                queueArr[0] = node.left.value;
                if (node.right){
                  node.right = queueArr[0];
                  queueArr[0] = node.right.value;
                }
              }
            } else {
              breadthFirstTraversal(node);
            }
            if (node.right){
              node.right = this.root;
              this.root = node.right;
              if (node.right){
                node.right = queueArr[0];
                queueArr[0] = node.right.value;
                if (node.left){
                  node.left = queueArr[0];
                  queueArr[0] = node.left.value;
                }
              }
            } else {
              breadthFirstTraversal(node);
            }
          }
        }
        return queueArr;
      };
      breadthFirstTraversal();
    }
  }

  add(value) {
    let currentNode = new Node(value);

    if(!this.root){
      this.root = currentNode;
    } else {
      let addNode = (node, currentNode) => {
        if(currentNode.value < node.value){//if current node is less than node go left and traverse else skip to right side
          if(node.left === null) {//if left node equals null attach currentNode
            node.left = currentNode;//connect currentNode to tree
          } else {
            addNode(node.left, currentNode);//if node exists continue until null
          }
        } else {
          if(node.right === null) {//if left node equals null attach currentNode
            node.right = currentNode;//connect currentNode to tree
          } else {
            addNode(node.right, currentNode);//if node exists continue until null
          }
        }
      };
      addNode(this.root, currentNode);
    }
  }

  contains(value) {
    if(!this.root){
      return false;
    } else {
      let containsNode = (node, value) => {
        if(value < node.value){//if current node is less than node go left and traverse else skip to right side
          if(node.left === null) {//if left node equals null attach currentNode
            return false;
          } else {
            containsNode(node.left, value);//if node exists continue until null
          }
        } else if (value > node.value) {
          if(node.right === null) {//if left node equals null attach currentNode
            return false;//connect currentNode to tree
          } else {
            containsNode(node.right, value);//if node exists continue until null
          }
        } else { // if currentNode is equal to node return true
          return true;
        }
        return false;
      };
      return containsNode(this.root, value);
    }
  }
}



module.exports = {Node, BinaryTree, BinarySearchTree};
