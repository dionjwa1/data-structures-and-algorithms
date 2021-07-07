'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertMany(values) {
        // how can we insert all these values into our tree
    }
}

const tbf = (breadthFirst)=> {
console.log('my tbf fun',tbf, breadthFirst);


if (current.left === null && current.value < newNode.value) {
    current.left = newNode;
    continue;
} 

if (current.right === null && current.value > newNode.value)  {
    current.right = newNode;
    continue;
} 

if (current.value < newNode.value) {
    current = current.right;
} else {
  current = current.left;
}
};