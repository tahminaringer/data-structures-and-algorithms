'use strict';

const Node = require('./node');

class Queue {
  constructor(){
    this.front = null;
    this.end = null;

  }

  peek() {
    try {
      if(!this.front){ //if front does not exist return error
        throw new Error('Queue is empty- cannot peek');
      }
    } catch(err) {
      return err.message;
    }
    return this.front.value;
  }

  enqueue(value) {
    const node = new Node(value);
    if(!this.front) {
      this.front = node;
      this.end = node;
    } else {
      this.end.next = node;
      this.end = node;
    }
  }

  dequeue() {
    try {
      if(!this.front){
        throw new Error('Queue is empty - cannot dequeue');
      }
    } catch (err) { return err; }
    if (this.front === this.end) {
      const deqVal = this.front;
      this.front = null;
      this.end = null;
      return deqVal.value;
    } else {
      const deqVal = this.front;
      this.front = this.front.next;
      return deqVal.value;
    }
  }

  isEmpty() {
    return (!this.front) ? true : false;
  }
}

module.exports = Queue;


