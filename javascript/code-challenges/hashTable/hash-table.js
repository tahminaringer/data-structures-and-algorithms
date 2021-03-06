'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    node.next = null;
  }
}

class HashMap {
  constructor(size) {
    this.map = new Array(size);
    this.size = size;
  }
  hash(key) {
    return key.split('').reduce((accumulator, value) => {
      return accumulator + value.charCodeAt(0);
    }, 0) * 199 % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    const entry = {[key]: value};
    if( !this.map[index] ){
      this.map[index] = new LinkedList();
    }
    this.map[index].add(entry);
  }
  get(key) {
    let index = this.hash(key);
    if(!this.map[index]){ return null; }
    let current = this.map[index].head;
    while (current) {
      let objKey = Object.keys(current.value);
      let objValue = Object.values(current.value);
      if (objKey[0] === key) {
        return objValue[0];
      }
      current = current.next;
    }
    return null;
  }

  contains(key) {
    let index = this.hash(key);
    let current = this.map[index].head;

    while (current) {
      let objKey = Object.keys(current.value);
      if(objKey[0] === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = HashMap;


function isLinkedListCircular(this.head) {
  let currentNode = this.head;
  let hash = {};
  if (!currentNode) {
    return true;
  } else {
    while (currentNode.next !== null && currentNode !== hash.currentNode) {
      if(currentNode) {
        hash.currentNode = currentNode;
        hash.currentNode.value = 'true';
      }
      currentNode = currentNode.next;
    }
    if (currentNode === hash.currentNode && hash.currentNode.value === 'true') {
      return true;
    } else if (currentNode.next === null) {
      return false;
    } 
  }
  return false;
}

isLinkedListCircular();

