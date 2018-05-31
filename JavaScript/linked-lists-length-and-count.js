/*
Linked Lists - Length & Count

Implement Length() to count the number of nodes in a linked list.

length(null) => 0
length(1 -> 2 -> 3 -> null) => 3
Implement Count() to count the occurrences of an integer in a linked list.

count(null, 1) => 0
count(1 -> 2 -> 3 -> null, 1) => 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
I've decided to bundle these two functions within the same Kata since they are both very similar.

The push()/Push() and buildOneTwoThree()/BuildOneTwoThree() functions do not need to be redefined.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  if(head === null) {
    return 0;
  }
  let n = 0;
  let curr = head;
  while(curr !== null) {
    curr = curr.next;
    n++;
  }
  return n;
}

function count(head, data) {
  if(head === null) {
    return 0;
  }
  let c = 0;
  let curr = head;
  while(curr !== null) {
    if(curr.data === data) c++;
    curr = curr.next;
  }
  return c;
}
