// http://www.codewars.com/kata/linked-lists-get-nth-node/train/java

class LinkedListsGetNthNode {
  public int data;
  public Node next = null;
  
  public static int getNth(Node n, int index) throws Exception{
    if(n == null) {
      throw new Exception("Empty list");
    }
    int count = 0;
    Node start = n;
    while(start != null) {
      if(count == index) {
        return start.data;
      }
      count++;
      start = start.next;
    }
    throw new Exception();
  }
}
