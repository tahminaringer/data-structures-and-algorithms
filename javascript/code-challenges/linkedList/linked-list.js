'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  // takes in any value as argument and adds a new node with that value to the head of the list
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  // takes in any value as an argument and returns a boolean result depending on whether that value exists as a node's value somewhere within the list
  includes(value) {
    let node = this.head;

    while (node) {
      if(node.value === value) {
        return true;
      } else {
        return false;
      }
    }
  }

  // takes in no arguments and returns a string representing all the values in the Linked List
  toString() {
    let currentNode = this.head;
    let str = '';
    while(currentNode) {
      str += currentNode.value + ' ';
      currentNode = currentNode.next;
    }
    return str;
  }
}

module.exports = LinkedList;
