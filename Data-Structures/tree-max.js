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
}

const bst = new BinarySearchTree();

bst.root = new Node(10);
bst.root.left = new Node(5);
bst.root.right = new Node(20);
bst.root.left.left = new Node(3);
bst.root.left.right = new Node(7);
bst.root.right.left = new Node(15);
bst.root.right.right = new Node(21);
