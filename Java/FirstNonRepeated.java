/*
You need to write a function, that returns the first non-repeated character in the given string.

For example for string "test" function should return 'e'.
For string "teeter" function should return 'r'.

If a string contains all unique characters, then return just the first character of the string.
Exanple: for input "trend" function should return 't'

You can assume, that the input string has always non-zero length.
*/

import java.util.stream.*;
public class FirstNonRepeated {
    public static Character firstNonRepeated(String source) {
      return source.chars().mapToObj(c -> (char) c).filter(i -> source.indexOf(i) == source.lastIndexOf(i)).findFirst().get();
    }
}
