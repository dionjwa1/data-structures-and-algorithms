'use srtict';

const printAll = (head) {
    current = head;
    while (head !== null) {
        console.log(current.value);
current = current.next;
    }
}

