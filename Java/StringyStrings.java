/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

public class StringyStrings {
  public static String stringy(int size) {
    StringBuilder sb = new StringBuilder(size);
    if(size % 2 == 0) while(sb.length() <= size-2) sb.append("10");
    else {
      while(sb.length() < size) {
        if(sb.length() == size-1) sb.append("1");
        else sb.append("10");
      }
    }
    return sb.toString();
  }
}
