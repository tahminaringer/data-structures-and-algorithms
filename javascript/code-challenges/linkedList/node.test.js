
'use strict';

const LL = require('./linked-list');

describe('LinkedList', () => {

  it('inserts a node at the beginning a list', () => {
    const list = new LL();
    list.insert('bananas');
    expect(list.head.value).toEqual('bananas');
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const list = new LL();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.head.value).toEqual('c');
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const list = new LL();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.head.value).toEqual('c');
    let nextNode = list.head.next;
    expect(nextNode.value).toEqual('b');
    nextNode = nextNode.next;
    expect(nextNode.value).toEqual('a');
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const list = new LL();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('c')).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LL();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.includes('ferret')).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LL();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.toString()).toEqual('{c} -> {b} -> {a}');
  });

});

