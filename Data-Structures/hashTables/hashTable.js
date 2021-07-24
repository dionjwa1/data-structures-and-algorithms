'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (!this.head) {
      this.head = new Node(value)
      return;
    };

  
    let current = this.head;
    let previous = null;
    while (current) {
      previous = current;
      current = current.next;
    }

    previous.next = new Node(value);
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let arrayOfCharacters = key.split(''); 
    let sumOfAsciiValues = arrayOfCharacters.reduce((acc, char) => {
      return acc + char.charCodeAt(0); 
    }, 0);

    return (sumOfAsciiValues * 599) % this.size; 
  }

  // Parameters: Key so we store things, and some value
  add(key, value) {
    let hash = this.hash(key);

    // check if thers a linked list at the hashed index, add an empty linked list if not
    if (!this.buckets[hash]) this.buckets[hash] = new LinkedList();

    // add our key and our value to the linked list.
    let entry = { [key]: value }
    this.buckets[hash].insert(entry);
    return entry;
  }

  // get a key, look up the value in our hash table and return.
  find(key) {

  }

  // returns a boolean whether the key exists
  contains(key) {
    let hash = this.hash(key);

    return this.buckets[hash] ? true : false;
  }
}


let table = new HashTable(1024);

table.add('Pioneer Square', 98104);

console.log(table.contains('Pioneer Square'));

table.add('Alki Beach', '98116');
console.log(table.contains('West Seattle'));
