/*
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.
*/

import java.util.*;
import java.util.stream.*;
public class Kata {
  public static int findLongest(final String str) {
    String[] spl = str.split(" ");
    Arrays.sort(spl, Comparator.comparing(String::length).reversed());
    return spl[0].length();
  }
} 

