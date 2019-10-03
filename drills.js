const LinkedList = require('./linked-list');

function main() {
  const SLL = new LinkedList();
  const insertItems = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
  insertItems.forEach(item => SLL.insertLast(item));
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hot Dog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  return SLL;
}

function logger() {
  const testList = main();

  let curr = testList.head;

  while (curr !== null) {
    console.log(curr.value);
    curr = curr.next;
  }
}

logger();
