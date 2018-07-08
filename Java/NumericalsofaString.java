/*
You are given an input string.

For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

But will your code be performant enough?

Examples:
input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
Note: there will be no int domain overflow (character occurences will be less than 2 billion).
*/

import java.util.HashMap;
public class NumericalsofaString {
    public static String numericals(String s) {
        HashMap<String, Integer> counts = new HashMap<>();
        StringBuilder sb = new StringBuilder();
        for(String i: s.split("")) {
          int c = counts.getOrDefault(i, 0);
          if(c == 0) {
            sb.append("1");
            counts.put(i, 1);
          }
          else {
            sb.append(c+1);
            counts.put(i, c+1);
          }
        }
      return sb.toString();
    }
}
