/*
You have two arrays: arrSearch and arrTake.
arrSearch has to be sorted in reverse alphabetical order. Now, from arrSearch extract the third element, and from that element select the third letter. If the letter you selected matches the first letter of one or more elements of arrTake, return the first element that starts with the respective letter. 
If there is no element to match in the second array then return 'Nothing here'.
*/

import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Stream;
public class SelectTwist {
  public static String select(String[] arrSearch, String[] arrTake) {
    Arrays.sort(arrSearch, (a,b) -> b.compareTo(a));
    return Arrays.asList(arrTake).stream().filter(e -> e.charAt(0) == arrSearch[2].charAt(2)).findFirst().orElse("Nothing here");
  }
}
