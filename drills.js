const LinkedList = require('./linked-list');

function main() {
  const SLL = new LinkedList();
  const insertItems = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
  insertItems.forEach(item => SLL.insertLast(item));
  SLL.insertLast('Tauhida');
  //SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hot Dog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  return SLL;
}

function display(lls) {

  let curr = lls.head;

  while (curr !== null) {
    console.log(curr.value);
    curr = curr.next;
  }
}

function size(lls){
  let node = lls.head;
  let i = 1;
  while (node.next !== null){
    i++;
    node = node.next
  }
  return i
}

function isEmpty(lls){
  if (lls.head.next === null){
    return true
  } else return false
}

function findPrevious(lls, key){
  let node = lls.head
  let prev = lls.head
  if(prev.value === key){
    return 'Key is first in list'
  }
  node = node.next
  while(node.value !== key){
    prev = node.next
    node = prev.next
  }
  return prev.value
}
function findLast(lls){
  if(isEmpty(list)){
    return 'Empty list'
  }
  let node = lls.head
  while(node.next !== null){
    node = node.next
  }
  return node.value
}

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
      let newNode = current;
      while (newNode.next !== null) {
          if (newNode.next.value === current.value) {
              newNode.next = newNode.next.next;
          }
          else {
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
display(list);
//console.log(size(list))
//console.log(isEmpty(list))
//console.log(findPrevious(list, 'Hot Dog'))
//console.log(findLast(list))
//WhatDoesThisProgramDo(list)
