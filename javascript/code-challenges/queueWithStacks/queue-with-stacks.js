'use strict';

class PseudoQueue {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    Stack.unshift(value);
  }

  dequeue() {
    Stack.shift();
  }

}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(value){
    this[this.length++] = value;
  }
  pop(){
    if(!this.length){
      throw new Error('the stack is empty');
    }
    let value = this[this.length -1];
    delete this[this.length -1];
    this.length--;
    return value;
  }
  peek(){
    if(!this.length){
      throw new Error('the stack is empty');
    }
    return this[this.length -1];
  }
}

module.exports = {PseudoQueue, Stack};
