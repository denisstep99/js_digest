module.exports = function DFS(adjacencyList, startNodeIndex, execFunction = e => e) {
    const visitedNodes = Array(adjacencyList.length).fill(false);

    visitedNodes[startNodeIndex] = true;

    dfsStep(adjacencyList, startNodeIndex, visitedNodes, execFunction);
};

function dfsStep(adjacencyList, currentNodeIndex, visitedNodes, execFunction) {
    const currentNode = adjacencyList[currentNodeIndex];

    currentNode[0] = execFunction(currentNode[0]);

    for (let i = 1; i < currentNode.length; i++) {
        if (!visitedNodes[currentNode[i]]) {
            visitedNodes[currentNode[i]] = true;
            dfsStep(adjacencyList, currentNode[i], visitedNodes, execFunction);
        }
    }
}