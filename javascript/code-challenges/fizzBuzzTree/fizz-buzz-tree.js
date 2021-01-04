'use strict';

class Node {
  constructor(value, parent = null, children = null) {
    this.value = value;
    this.parent = parent;
    this.children = [children];
  }
}

class Tree {
  constructor(value){
    this.root = node;
  }
}

preOrder() {
  let preOrderTraversal = (node) => {
    let currentNode = !node ? this.root : node;
    let fizz = 'Fizz';
    let buzz = 'Buzz';
    let fizzBuzz = 'FizzBuzz';
    let string = `'${value}'`


    if(!currentNode){
      return null;
    } else {
      if(currentNode){
        console.log(currentNode.value);
        for( let i=0; i < currentNode.children.length; i ++) {
          if(currentNode.value % 5 === 0 && currentNode.value % 3 === 0) {
            currentNode.value = fizzBuzz;
            fizzBuzz = currentNode.value;
            if(currentNode.value % 3 === 0) {
              currentNode.value = fizz;
              fizz = currentNode.value;
              if(currentNode.value % 5 === 0) {
                currentNode.value = buzz;
                buzz = currentNode.value;
              } else {
                currentNode.value = string;
                string = currentNode.value;
              }
            }
          }
          currentNode.children.length && this.preOrderTraversal(currentNode.children[i]);
        }
      }
    }
  }
  preOrderTraversal(Tree);
}
