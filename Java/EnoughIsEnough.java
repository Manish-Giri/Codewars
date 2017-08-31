/*
nough is enough!

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task

Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

Example

EnoughIsEnough.deleteNth(new int[] {20,37,20,21}, 1) // return [20,37,21]
EnoughIsEnough.deleteNth(new int[] {1,1,3,3,7,2,2,2,2}, 3) // return [1, 1, 3, 3, 7, 2, 2, 2]
*/

import java.util.*;
public class EnoughIsEnough {

  public static int[] deleteNth(int[] elements, int maxOcurrences) {
    //Code here ;)
    int[] zeroArr = {};
    if(elements.length == 0 || maxOcurrences < 1) {
      return zeroArr;
    }
    // System.out.println(Arrays.toString(elements));
    List<Integer> nums = new ArrayList<>();
    HashMap<Integer, Integer> map = new HashMap<>();
    for(int i = 0; i < elements.length; i++) {
      if(map.containsKey(elements[i])) {
        // check count
        int count = map.get(elements[i]);
        map.put(elements[i], count + 1);
        
        if(count < maxOcurrences) {
         nums.add(elements[i]);
        }
      }
      
      else {
       map.put(elements[i], 1);
       nums.add(elements[i]);
      }
    
    }
    
   //System.out.println(nums);
    Integer[] res = nums.toArray(new Integer[nums.size()]);
     return Arrays.stream(res).mapToInt(Integer::intValue).toArray();
    
  
  }

}
