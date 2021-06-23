'use strict';

class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null
        this.next = next || null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        if (!this.head) {
            this.head = new Node(value)
        } else {
    
        }
return this;
    }
};

