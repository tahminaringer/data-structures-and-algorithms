'use strict';

const graph = require('../graph')

depthFirstSearch(startNode) {
  const visitedNodes = new Set();
  const _traverseNeighbors = (node) => {
    visitedNodes.add(node);
    const neighbors = this.getNeighbor(node);
    for (let edge of neighbors) {
      if (!visitedNodes.has(edge.verter)) {
        _traverseNeighbors(edge.vertex);
      }
    }
  };
  _traverseNeighbors(startNode);
  return visitedNodes;
}

