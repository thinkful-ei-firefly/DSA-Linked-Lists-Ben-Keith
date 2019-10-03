const LinkedList = require('./linked-list');

function main() {
  const SLL = new LinkedList();
  const insertItems = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
  insertItems.forEach(item => SLL.insertLast(item));
  SLL.insertLast('Tauhida');
  //SLL.remove('squirrel');
  SLL.insertBefore('Artemis', 'Boomer');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hot Dog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  return SLL;
}

function display(lst) {
  let curr = lst.head;

  while (curr !== null) {
    console.log(curr.value);
    curr = curr.next;
  }
}

function size(lst) {
  let node = lst.head;
  let i = 1;
  while (node.next !== null) {
    i++;
    node = node.next;
  }
  return i;
}

function isEmpty(lst) {
  if (lst.head.next === null) {
    return true;
  } else return false;
}

function findPrevious(lst, key) {
  let node = lst.head;
  let prev = lst.head;
  if (prev.value === key) {
    return 'Key is first in list';
  }
  node = node.next;
  while (node.value !== key) {
    prev = node.next;
    node = prev.next;
  }
  return prev.value;
}
function findLast(lst) {
  if (isEmpty(list)) {
    return 'Empty list';
  }
  let node = lst.head;
  while (node.next !== null) {
    node = node.next;
  }
  return node.value;
}

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}
/**
 * set curret node to list head
 * while current node !== null (which happens after it iterates past the last block)
 * creates a new node = current node
 * while the node after the new node !== null (while its not the last item in the list)
 * if the value of the next node === the value of the current node
 * it sets the next value of the new node to the node 2 ahead
 * else it iterates new node
 *
 * IT DELETES DUPLICATE ITEMS
 * Polynomial O n^2
 */

const list = main();
// display(list);
//console.log(size(list))
//console.log(isEmpty(list))
//console.log(findPrevious(list, 'Hot Dog'))
//console.log(findLast(list))
//WhatDoesThisProgramDo(list)

function reverseList(lst) {
  let curr = lst.head;
  let next = curr.next;
  let prev = null;
  while (next !== null) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = next.next;
  }
  curr.next = prev;
  lst.head = curr;
}

//reverseList(list);
//display(list);

function threeFromEnd(lst) {
  let node = lst.head;
  if (node.next.next === null) {
    return 'list too short';
  }
  while (node.next.next.next !== null) {
    node = node.next;
  }
  return node;
}
//console.log(threeFromEnd(list))

function middle(lst) {
  let node = lst.head;
  let double = lst.head;
  while (double.next !== null) {
    if (double.next.next === null) {
      return 'even list has no middle';
    }
    node = node.next;
    double = double.next.next;
  }
  return node;
}

// display(list);
// console.log(middle(list));

function makeCycle() {
  const SLL = new LinkedList();
  const insertItems = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
  insertItems.forEach(item => SLL.insertLast(item));
  SLL.insertLast('Tauhida');
  SLL.insertBefore('Artemis', 'Boomer');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hot Dog', 'Helo');
  SLL.insertAt('Kat', 3);
  const found1 = SLL.find('Starbuck');
  const found2 = SLL.find('Boomer');
  found1.next = found2;
  return SLL;
}

const CycleList = makeCycle();

function cycleList(lst) {
  let arr = [];
  let curr = lst.head;
  while (curr.next !== null) {
    if (arr.includes(curr)) return true;
    arr.push(curr);
    curr = curr.next;
  }
  return false;
}

console.log(cycleList(CycleList)); // returns true
console.log(cycleList(list)); // returns false
