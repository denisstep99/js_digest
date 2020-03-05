module.exports = function BFS(adjacencyList, startNode, execFunction = e => e) {
  const nodesQueue = [adjacencyList[startNode]];
  const visitedNodes = Array(nodesQueue.length).fill(false);

  visitedNodes[startNode] = true;

  while (nodesQueue.length) {
    const currentNode = nodesQueue.shift();

    currentNode[0] = execFunction(currentNode[0]);

    for (let i = 1; i < currentNode.length; i++) {
      if (!visitedNodes[currentNode[i]]) {
        nodesQueue.push(adjacencyList[currentNode[i]]);
        visitedNodes[currentNode[i]] = true;
      }
    }
  }
};
