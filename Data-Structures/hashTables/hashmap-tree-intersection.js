'use strict';

let firstTreeArr = [];
// let secondTreeArr = [];
let matchArr = [];

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    preOrder() {
        const walk = (node) => {

            // process the value
            console.log(node.value);

            firstTreeArr.push(node.value);

            if (node.left) { walk(node.left) };
            //look at right
            if (node.right) { walk(node.right) };
        }
        walk(this.root);
        tree2.preOrderCheck();
    }


    preOrderCheck() {
        const walk = (node) => {

            // process the value
            if (firstTreeArr.includes(node.value)) {
                matchArr.push(node.value);
            }

            if (node.left) { walk(node.left) };
            //look at right
            if (node.right) { walk(node.right) };
        }
        walk(this.root);
    }
}

const tree1 = new BinaryTree();

tree1.root = new Node(10);
tree1.root.left = new Node(100);
tree1.root.right = new Node(20);
tree1.root.left.left = new Node(3);
tree1.root.left.right = new Node(125);
tree1.root.right.left = new Node(15);
tree1.root.right.right = new Node(200);

const tree2 = new BinaryTree();

tree2.root = new Node(10);
tree2.root.left = new Node(1);
tree2.root.right = new Node(200);
tree2.root.left.left = new Node(100);
tree2.root.left.right = new Node(157);
tree2.root.right.left = new Node(125);
tree2.root.right.right = new Node(20);

tree1.preOrder();
console.log(matchArr);
