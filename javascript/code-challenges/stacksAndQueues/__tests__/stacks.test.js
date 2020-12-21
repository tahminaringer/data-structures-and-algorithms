'use strict';

const Stack = require('../stacks');

describe('stacks', () => {
  describe('push()', () => {
    it('add a value to the top of the stack', () => {
      let stack = new Stack();
      stack.push(1);
      expect(stack.top.value).toEqual(1);
    });
    it('add multiple values to the top of the stack', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.push(5);
      expect(stack.top.value).toEqual(5);
    });
  });

  describe('pop()', () => {
    it('pop off a single item off the stack', () => {
      let stack = new Stack();
      stack.push(1);
      stack.pop();
      expect(stack.top).toEqual(null);
    });

    it('can successfully empty a stack after multiple pops', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.isEmpty()).toEqual(true);
    });
  });

  describe('peek()', () => {
    it('Can successfully peek the next item on the stack', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.top.value).toEqual(3);
    });
  });

  describe('instantiate()', () => {
    it('Can successfully instantiate an empty stack', () => {
      let stack = new Stack();
      stack.top = null;
      expect(stack.top).toEqual(null);
    });
  });

  describe('pop(), peek()', () => {
    it('Calling peek or pop on an empty stack raises exception', () => {
      let stack = new Stack();
      expect(stack.pop()).toEqual('Stack is empty - cannot pop');
      expect(stack.peek()).toEqual('Stack is empty - cannot peek');
    });
  });
});
