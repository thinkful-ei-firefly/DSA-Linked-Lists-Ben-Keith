class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    let curr = this.head;
    if (!this.head) {
      return null;
    }
    while (curr.value !== item) {
      if (curr.next === null) {
        return null;
      } else {
        curr = curr.next;
      }
    }
    return curr;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let curr = this.head;
    let prev = this.head;

    while (curr !== null && curr.value !== item) {
      prev = curr;
      curr = curr.next;
    }
    if (curr === null) {
      console.log('Item not found');
      return;
    }
    prev.next = curr.next;
  }
  insertBefore(item, key) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === key) {
      this.insertFirst(item);
      return;
    }
    let curr = this.head;
    let prev = this.head;
    while (curr !== null && curr.value !== key) {
      prev = curr;
      curr = curr.next;
    }
    if (curr === null) {
      console.log('Key not found');
      return;
    }
    const insert = new _Node(item, curr);
    prev.next = insert;
  }
  insertAfter(item, key) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === key) {
      this.insertBefore(item, this.head.next.value);
      return;
    }
    let curr = this.head;
    let next = this.head;
    while (curr !== null && curr.value !== key) {
      curr = curr.next;
      next = curr.next;
    }
    if (curr === null) {
      console.log('Key not found');
      return;
    }
    const insert = new _Node(item, next);
    curr.next = insert;
  }
  insertAt(item, num) {
    let curr = this.head;
    let pos = 1;
    while (curr !== null && pos < num) {
      curr = curr.next;
      pos++;
    }
    this.insertBefore(item, curr.value);
  }
}

module.exports = LinkedList;
