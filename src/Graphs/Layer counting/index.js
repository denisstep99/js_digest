module.exports = function layerCounting(adjacencyList, startNode, execFunction = e => e) {
    const nodesQueue = [{layer: 1, node: adjacencyList[startNode]}];
    const visitedNodes = Array(nodesQueue.length).fill(false);

    visitedNodes[startNode] = true;

    while (nodesQueue.length) {
        const {node: currentNode, layer: currentLayer} = nodesQueue.shift();

        currentNode[0] = execFunction(currentNode[0], currentLayer);

        for (let i = 1; i < currentNode.length; i++) {
            if (!visitedNodes[currentNode[i]]) {
                nodesQueue.push({layer: currentLayer + 1, node: adjacencyList[currentNode[i]]});
                visitedNodes[currentNode[i]] = true;
            }
        }
    }
};
