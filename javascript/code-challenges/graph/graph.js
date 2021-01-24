'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('error: need a start or end vertex');
    }
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }
  getNeighbor(vertex) {
    if(!this.adjacencyList.has(vertex)){
      throw new Error('error - invalid vertex', vertex);
    }
    return this.adjacencyList.get(vertex);
  }
  bfs(startNode) {
    const queue =[];

    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);

    while(queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbor(currentNode);

      for(let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        if(visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    return visitedNodes;
  }

  size(startNode) {
    let count = 0;
    const visitedNodes = new Set();
    const _traverseNeighbor = (node) => {
      visitedNodes.add(node);
      count ++;
      const neighbors = this.getNeighbors(node);
      for(let edge of neighbors) {
        if(!visitedNodes.has(edge.vertex)) {
          _traverseNeighbor(edge.vertex);
          count ++;
        }
      }
    };
    _traverseNeighbor(startNode);
    return count;
  }

  pathTo(startNode, endNode) {
    const stack = [];
    const visitedNodes = new Set();
    const parentPath = new Map();

    stack.push(startNode);
    visitedNodes.add(startNode);

    while(stack.length) {
      const currentNode = stack.pop();
      if(currentNode === endNode) {
        return parentPath;
      }
      const neighbors = this.getNeighbors(currentNode);

      for(let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if(visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        stack.push(neighborNode);
        parentPath.set(neighborNode, currentNode);
      }
    }
    return parentPath;
  }
}

module.exports = { Graph, Vertex, Edge };
