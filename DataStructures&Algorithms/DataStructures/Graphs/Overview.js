/**
 * Summary:
 * Graphs are a versatile data structure used to model relationships between objects. They consist of vertices (nodes)
 * and edges (connections between nodes). There are different types of graphs such as directed and undirected graphs,
 * weighted and unweighted graphs, and cyclic and acyclic graphs.
 * 
 * A graph data structure consists of a finite (and possible mutable) set of vertices or nodes or points, together with a set of unordered paris of these vertices for an undirected graph or a set of ordered pairs for a directed graph
 * 
 * Vocab
 * Vertex = node
 * Edge = connections between nodes
 * directed vs undirected
 * undirected = two way connections, there is no direction assocaited with edges
 * directed = direction assocaited with the edges, can only move in X direction
 * weighted vs unweighted
 * weighted = there is a value associated with the edges themselves (maps for example will have km values per road)
 * unweighted = there are no values associated with the edges
 * Adjacency matrix = graph or table like visualisation typically with 0's and 1's to confirm whether there is an edge between two vertices
 * ^^^can also be stored in an adjacency list 
 * --list can take up less space in sparse graphs, faster to iterate over all edges, but can be slower to lookup specific edge
 * --matrix takes up more space in sparse graphs, it 's slower to iterate over all edges but it's faster to lookup specific edge
 * Implementation:
 * Graphs can be implemented using various data structures such as adjacency lists, adjacency matrices, or edge lists.
 * This example demonstrates an implementation of an undirected graph using an adjacency list.
 * 
 * Use Cases:
 * Graphs have a wide range of applications including social networks, recommendation systems, network routing,
 * computer networks, maps and navigation systems, and much more.
 * 
 * Big O:
 * - Space Complexity: The space complexity of representing a graph depends on the number of vertices and edges.
 *   For an adjacency list representation, it is O(V + E), where V is the number of vertices and E is the number of edges.
 * - Time Complexity:
 *   - Adding a vertex: O(1)
 *   - Adding an edge: O(1)
 *   - Removing a vertex: O(V + E)
 *   - Removing an edge: O(V)
 *   - Querying adjacency: O(V)
 *   - Traversal (BFS/DFS): O(V + E)
 *   - Finding connected components: O(V + E)
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    //loop through items within list, for that ITEM, send vertex and adjcencyvertex through removeedge function, the pop function removes it from the array 
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
console.log(g.adjacencyList)


//provided by chatgpt

class Graph2 {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return "Vertex not found";
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return "Vertex not found";
        }
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return "Vertex not found";
        }
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

// Example usage:

const graph = new Graph2();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
console.log(graph.adjacencyList);
// {
//   A: [ 'B', 'C' ],
//   B: [ 'A' ],
//   C: [ 'A' ]
// }

graph.removeEdge("A", "B");
console.log(graph.adjacencyList);
// {
//   A: [ 'C' ],
//   B: [],
//   C: [ 'A' ]
// }

graph.removeVertex("A");
console.log(graph.adjacencyList);
// {
//   B: [],
//   C: []
// }
