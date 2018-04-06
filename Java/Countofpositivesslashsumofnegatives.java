/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array:

C#/Java: new int[] {} / new int[0];
C++: std::vector<int>();
JavaScript/CoffeeScript/TypeScript/PHP/Haskell: [];
Rust: Vec::<i32>::new();
ATTENTION!
The passed array should NOT be changed. Read more here.

For example:

input int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15} 
return int[] {10, -65}.
*/

import java.util.*;
import java.util.stream.*;

public class Kata
{
    public static int[] countPositivesSumNegatives(int[] input)
    {
        if(input == null || input.length == 0) {
          return new int[]{};
        }
        int c1 = (int) Arrays.stream(input).filter(e->e>0).count();
        int c2 = Arrays.stream(input).filter(e->e<0).sum();
        return new int[]{c1, c2}; 
    }
}
