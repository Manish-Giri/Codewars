/*
Write a function which takes two arguments and returns all numbers which are divisible by given divisor. First argument is array of numbers and the second is divisor.

Example

divisibleBy([1,2,3,4,5,6], 2) == [2,4,6]
divisibleBy([1,2,3,4,5,6], 2) == [2,4,6]
*/

/*
import java.util.*;
public class EvenNumbers {
  public static int[] divisibleBy(int[] numbers, int divider) {
  //  return Arrays.stream(numbers).filter(n -> n % divider == 0).toArray(); 
 // int[] numbers  = {1,2,3,4,5,6};
        // int divider = 2;
        List<Integer> nums = new ArrayList<>();
        for(int i: numbers) {
            if(i % divider == 0){
                nums.add(i);
            }
        }
        // System.out.println(Arrays.toString(nums.toArray()));
        Integer[] res = nums.toArray(new Integer[nums.size()]);
        int[] intArray = Arrays.stream(res).mapToInt(Integer::intValue).toArray();
        
        return intArray;
  }
}
*/

import java.util.*;
public class EvenNumbers {
  public static int[] divisibleBy(int[] numbers, int divider) {
   return Arrays.stream(numbers).filter(n -> (n % divider) == 0).toArray();
  }
}
