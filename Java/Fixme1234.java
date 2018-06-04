/*
The code provided is supposed to simply return the named number as an integer.

But it's not working properly.

Task
Fix the bug so we can all go home early.
*/

import java.util.*;

public class Fixme1234 {

  private static final Map<String, MyNumber> cache = new HashMap<>();
  
  static enum MyNumber {
    ONE(1, "one", "ichi", "un"),
    TWO(2, "two", "ni", "deux"),
    THREE(3, "three", "san", "trois"),
    FOUR(4, "four", "shi", "quatre")
    ;
    
    private final int val;
    
    private MyNumber(int val, String ...names) {
      this.val = val;
      for (final String n : names) cache.put(n, this);      
    }
    
    public int intValue() {
      return this.val;
    }
    
  }
   
  static MyNumber getNumber(final String name) {
    List<String> a = Arrays.asList("one", "ichi", "un");
    List<String> b = Arrays.asList("two", "ni", "deux");
    List<String> c = Arrays.asList("three", "san", "trois");
    List<String> d = Arrays.asList("four", "shi", "quatre");
    String value = "";
    if(a.contains(name)) value = "ONE";
    else if(b.contains(name)) value = "TWO";
    else if(c.contains(name)) value = "THREE";
    else if(d.contains(name)) value = "FOUR";
    MyNumber.valueOf(value);
    return cache.get(name);
  }
  
}
