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
};

inOrder() {
    const walk = (node) => {

      // look at the left
      if (node.left) walk(node.left);

      // process the value
      console.log(node.value);

      // look at the right
      if (node.right) walk(node.right)};
    
   
};
walk(this.root);

const bst = new BinarySearchTree();

bst.root = new Node(10);
bst.root.left = new Node(5);
bst.root.right = new Node(20);
bst.root.left.left = new Node(3);
bst.root.left.right = new Node(7);
bst.root.right.left = new Node(15);
bst.root.right.right = new Node(21);

const fizz = (bst.walk);
 class fizzBuzz {

    {

        for (int i = 1; i <= 100; i++) {

            if (i % 3 == 0) {
                System.out.print(i + " ");
                System.out.print(" fizz ");
            }

            if (i % 5 == 0) {
                System.out.print(" " + i);
                System.out.print(" " + "buzz ");
            }

            if((i % 3 == 0)&&(i % 5 == 0)){
                System.out.print(i + " ");
                System.out.print(" fizzbuzz ");
            }

        }
        console.log(fizz);
        console.log(i);
    }
    return (fizz[i]);
    
};
