function depthFirstSearch(rootNode, vertices, edges) {
    rootNode.distance = 0
    let explored = [rootNode]
    let stack = [rootNode]
    while (stack.length != 0) {
        let currentNode = stack.pop()
        if (!currentNode.discovered) {
            currentNode.discovered = true
            findAdjacent(currentNode.name, vertices, edges).forEach(node => {
                explored.push(node)
                stack.push(node)
            })
        }
    }
    return explored
}

function findAdjacent(nodeName,  vertices, edges){
    return edges.filter(edge => edge.includes(nodeName))
    .map(edge=> edge.filter(node => node != nodeName )[0])
    .map(name => vertices.find(vertex => vertex.name == name)).filter(node => !node.discovered)
  }