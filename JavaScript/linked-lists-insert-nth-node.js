/*
Linked Lists - Insert Nth

Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.

The push() and buildOneTwoThree() (build_one_two_three() in PHP) functions do not need to be redefined. The Node class is also preloaded for you in PHP.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  let current = head, pos = 0, newNode = null, prev = head;
  if(head == null) {
    if(index > 0) {
      throw new Error("Invalid index for Empty List");
    }
    else {
      newNode = new Node(data);
      newNode.next = null;
      head = newNode;
      return head;
    }
  }
  while(current !== null) {
    if(pos === index) {
      newNode = new Node(data);
      newNode.next = current;
      if(pos === 0) {
        head = newNode;
        return head;
      }
      else {
        prev.next = newNode;
        return head;
      }
    }
    pos++;
    prev = current;
    current = current.next;
  }
  if(pos === index) {
    newNode = new Node(data);
    prev.next = newNode;
    newNode.next = null;
    return head;
  }
  else {
    throw new Error("Invalid index");
  }
}
