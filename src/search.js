function DFS(start_node, key) {
  const next_nodes = [start_node]; // Stack

  const visited_nodes = new Set();
  visited_nodes.add(start_node);

  while (next_nodes.length > 0) {
    const node = next_nodes.pop();

    if (node.key === key) {
      return node; // FOUND
    }

    for (const n of node.connected_nodes) {
      if (!visited_nodes.has(n)) {
        next_nodes.push(n);
        visited_nodes.add(n);
      }
    }
  }

  return null; // NOT FOUND
}

function BFS(start_node, key) {
  const next_nodes = [start_node]; // Queue

  const visited_nodes = Set.new();
  visited_nodes.add(start_node);

  while (next_nodes.length > 0) {
    const node = next_nodes.shift(); // dequeue

    if (node.key === key) {
      return node; // FOUND
    }

    for (n in node.connected_nodes) {
      if (!visited_nodes.has(n)) {
        next_nodes.push(); // queue
        visited_nodes.add(n);
      }
    }
  }

  return null; // NOT FOUND
}

module.exports = {
  DFS,
  BFS,
};
