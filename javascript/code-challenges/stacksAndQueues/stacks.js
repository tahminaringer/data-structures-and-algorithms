'use strict';

const Node = require('./node');

class Stack {
  constructor(){
    this.top = null;
  }

  peek() {
    try {
      if(!this.top){
        throw new Error('Stack is empty - cannot peek');
      }
    } catch(err) {
      return err.message;
    }
    return this.top.value;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    try {
      if(!this.top){
        throw new Error('Stack is empty - cannot pop');
      }
    } catch(err) {
      return err.message;
    }
    const item = this.top;
    this.top = this.top.next;
    return item;
  }

  isEmpty() {
    return (!this.top) ? true : false;
  }
}

module.exports = Stack;
