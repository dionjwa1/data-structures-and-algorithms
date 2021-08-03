'use strict';

let arr = ['Pandora', 'Arendelle', 'Metroville', 'Monstropolis', 'Narnia', 'Naboo' ];
const myGraph = (node) => { 
    visited[node] = true;
     while (!node.isEmpty(node.next)) {
         let visiting = node.next();
         console.log(`been here...done that ${visiting}`);
         for (let j = 0; j < graphAdj[visiting].length; j++) {
            if ((graphAdj[visiting][j] === [arr]) && (visited[j] === false)) {  
            visited[j] = true;
          console.log(visiting);
           }
        }
      }
 }

myGraph();
