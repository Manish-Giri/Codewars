/*
If you are given the head node in a linked list, write a method that swaps each pair of nodes in the list, then returns the head node of the list. Example: if you are given a list ordered A,B,C,D the resulting list should be B,A,D,C.

The list will be composed of Nodes of the following specification:

Java:

public class Node {
    private String value;
    public Node next;

    public Node(String value) { this.value = value; }

    public String getValue() { return value; }
}
*/

public class LinkedListPairs {
    public static Node swapPairs(Node head) {
        if(head == null || head.next == null) {
          return head;
        }
        Node current = head, newHead = head.next, next = null, temp = null;
        while(true) {
          next = current.next;
          temp = next.next;
          next.next = current;
          if(temp == null || temp.next == null) {
            current.next = temp;
            break;
          }
          current.next = temp.next;
          current = temp;
        }
        return newHead;
    }
}

// for debug ->

public class LinkedListPairs {
    public static Node swapPairs(Node head) {
        if(head == null || head.next == null) {
          return head;
        }
        Node printCurr = head;
        System.out.println("Original");
        while(printCurr != null) {
          System.out.print(printCurr.getValue() + "->");
          printCurr = printCurr.next;
        }
        System.out.println();
        Node current = head;
        Node newHead = head.next;

        Node next = null, temp = null;
        while(true) {
          next = current.next;
          temp = next.next;
      
          next.next = current;
          if(temp == null || temp.next == null) {
            current.next = temp;
            break;
          }
          current.next = temp.next;
          current = temp;
        }
        printCurr = newHead;
        System.out.println("After");
        while(printCurr != null) {
          System.out.print(printCurr.getValue() + "->");
          printCurr = printCurr.next;
        }
        System.out.println();
        System.out.println("New head: " + newHead.getValue());
        return newHead;
    }
}
