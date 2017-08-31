/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.
*/

import java.util.*;
public class Vowels {

  public static int getCount(String str) {
    // int vowelsCount = 0;
    List<String> vowels = Arrays.asList("a", "e", "i", "o", "u");
    // your code here
    long val = str.chars().filter(i -> vowels.contains(Character.toString((char) i))).count();
    return (int) val;
  }

}
