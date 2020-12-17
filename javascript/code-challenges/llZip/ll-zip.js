'use strict';

const Node = require('./node');

class LinkedList {
  constructor(value, next){
    this.value = value;
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  function ziplists(linkedList1, linkedList2) {
    let zippedList = new LinkedList();
    let currentNode1 = linkedList1.head;
    let currentNode2 = linkedList2.head;

    while(currentNode1 !== null || currentNode2 !== null){
      if(currentNode1 !== null){
        zippedList.insert(currentNode1);
        currentNode1 = currentNode1.next;
      }
      if(currentNode2 !== null) {
        zippedList.insert(currentNode2);
        currentNode2 = currentNode2.next;
      }
    }
    return zippedList;
  }
  ziplists();