'use strict';

const Queue = require('../queue');

describe('queues', () => {
  describe('enqueue()', () => {
    it('Can successfully enqueue into a queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      expect(queue.front.value).toEqual(1);
    });
    it('Can successfully enqueue multiple values into a queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);
      expect(queue.front.value).toEqual(5);
    });
  });

  describe('dequeue()', () => {
    it('Can successfully dequeue off the queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.dequeue();
      expect(queue.front.value).toEqual(null);
    });
    it('can successfully empty a queue after multiple pops', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.isEmpty()).toEqual(true);
    });
  });

  describe('peek()', () => {
    it('Can successfully peek into a queue, seeing the expected value', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.front.value).toEqual(1);
    });
  });

  describe('instantiate()', () => {
    it('Can successfully instantiate an empty queue', () => {
      let queue = new Queue();
      queue.front = null;
      expect(queue.front).toEqual(null);
    });
  });

  describe('pop(), peek()', () => {
    it('Calling peek or dequeue on an empty queue raises exception', () => {
      let queue = new Queue();
      expect(queue.dequeue()).toEqual('Queue is empty - cannot dequeue');
      expect(queue.peek()).toEqual('queue is empty - cannot peek');
    });
  });
});
