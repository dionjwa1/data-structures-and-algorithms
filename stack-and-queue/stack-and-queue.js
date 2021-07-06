'use strict';

const loop = (head, value) => {
  let current = head;
  while (current !== null) {
        if (current.next === null) {
            const n = new Node(value);
            current.next = n;
        }
    } current = current.next;
};
// need an if statement if head is null - if(head === null), head = new Node(value);


// const loop = (head) => {
//     let current = head;
//     while(current !== null) {
//       console.log(current.value);
//       current = current.next;
//      }
//   }