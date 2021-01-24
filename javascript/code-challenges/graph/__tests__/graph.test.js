'use strict';
const { Graph, Vertex, Edge } = require('../graph');

describe('Node can be successfully added to the graph', () => {
  it('can successfully add a node', () => {
    let node = new Vertex(5);
    expect(node.value).toBe(5);
  });
  it('An edge can be successfully added to the graph', () => {
    let vertex = new Vertex(5);
    let edge = new Edge(vertex, 9);
    expect(edge.vertex.value).toBe(5);
  });
  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let graph = new Graph();
    let vertex1 = new Vertex(5);
    let vertex2 = new Vertex(6);
    let vertex3 = new Vertex(7);
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    graph.addDirectedEdge(vertex1, vertex2, 3);
    graph.addDirectedEdge(vertex2, vertex3, 8);
    const visitedNodes = graph.bfs(vertex1);
    expect(visitedNodes.has(vertex3)).toBe(true);
    expect(visitedNodes.has(vertex2)).toBe(true);
  });
  it('All appropriate neighbors can be retrieved from the graph', () => {
    let graph = new Graph();
    let vertex1 = new Vertex(5);
    let vertex2 = new Vertex(6);
    let vertex3 = new Vertex(7);
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    graph.addDirectedEdge(vertex1, vertex2, 3);
    graph.addDirectedEdge(vertex2, vertex3, 8);
    const neighborNodes = graph.getNeighbor(vertex2);
    expect(graph.getNeighbor(vertex2)).toEqual(neighborNodes);
  });
  it('Neighbors are returned with the weight between nodes included', () => {
    let graph = new Graph();
    let vertex1 = new Vertex(5);
    let vertex2 = new Vertex(6);
    let vertex3 = new Vertex(7);
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    graph.addDirectedEdge(vertex1, vertex2, 3);
    graph.addDirectedEdge(vertex2, vertex3, 8);
    const neighborNodes = graph.getNeighbor(vertex2);
    expect(graph.getNeighbor(vertex2)).toEqual(neighborNodes);
  });
  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let graph = new Graph();
    let set = new Set();
    let vertex1 = new Vertex(5);
    let vertex2 = new Vertex(6);
    let vertex3 = new Vertex(7);
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    graph.addDirectedEdge(vertex1, vertex2, 3);
    graph.addDirectedEdge(vertex2, vertex3, 8);
    expect(graph.size(set)).toEqual(3);
  });
  xit('A graph with only one node and edge can be properly returned', () => {
    let graph = new Graph();
    let vertex1 = new Vertex(5);
    let vertex2 = new Vertex(6);
    let vertex3 = new Vertex(7);
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    graph.addDirectedEdge(vertex1, vertex2, 3);
    graph.addDirectedEdge(vertex2, vertex3, 8);
    const neighborNodes = graph.getNeighbor(vertex2);
    expect(graph.getNeighbor(vertex2)).toEqual(neighborNodes);
  });
  xit('An empty graph properly returns null', () => {
    let visitedNodes = new Set();
    addVertex('blue');
    expect();
  });

});
