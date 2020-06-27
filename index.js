function depthFirstSearch(rootNode, vertices, edges) {
    markDiscovered(rootNode);
    let stack = vertices.filter(vertex => vertex.name === rootNode.name);
    let adjacentNodes = findAdjacent(rootNode, vertices, edges);
    adjacentNodes.forEach(rootNode => {
        while (rootNode !== undefined) {
            markDiscovered(rootNode);
            stack.push(vertices.filter(vertex => vertex.name === rootNode.name)[0]);
            rootNode = findAdjacent(rootNode, vertices, edges)[0];
        }
    });
    return stack
    
}       

function findAdjacent(rootNode, vertices, edges){
    let adjacentNodeNames = edges.filter(edge => edge.includes(rootNode.name)
    ).flat().filter(name => name !== rootNode.name);
    let adjacentNodes =  vertices.filter(vertice => adjacentNodeNames.includes(vertice.name));
    return adjacentNodes.filter(function(node) {
        return node.discovered == null;
      });
    }

      function markDiscovered(node) {
        node.discovered = true;
    }