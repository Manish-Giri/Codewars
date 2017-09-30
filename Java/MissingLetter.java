/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
*/

import java.util.*;
import java.util.stream.*;
public class Kata
{
  public static char findMissingLetter(char[] array)
  {
    int[] nums = new String(array).chars().sorted().toArray();
    int pos = IntStream.range(1, nums.length).filter(index -> (nums[index] - nums[index-1] != 1)).findFirst().getAsInt();
    return (char) (nums[pos]-1);
  }
}
