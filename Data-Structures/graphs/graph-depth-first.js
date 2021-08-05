'use strict';

let arr = ['A', 'B', 'C', 'D', 'E', 'H', 'G'];
const myGraph = (node) => {
    visited[node] = true;
    while (!node.isEmpty(node.next)) {
        let visiting = node.next();
        console.log(`This is not the last node ${visiting}`);
        for (let j = 0; j < graphAdj[visiting].length; j++) {
            if ((graphAdj[visiting][j] === [arr]) && (visited[j] === false)) {
                visited[j] = true;
                console.log(visiting);
            }
        }
    }
}

myGraph();