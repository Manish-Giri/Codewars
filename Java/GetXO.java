/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

import java.util.*;
public class XO {
  
  public static boolean getXO (String str) {
  
    // Good Luck!!
    int exCount = (int) str.chars().mapToObj(c -> (char) c).filter(a -> Character.toLowerCase(a) == 'x').count();
    int ohCount = (int) str.chars().mapToObj(c -> (char) c).filter(a -> Character.toLowerCase(a) == 'o').count();
    return exCount == ohCount;
  }
}
