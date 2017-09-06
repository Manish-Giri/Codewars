/*
Complete the solution so that it reverses all of the words within the string passed in.

Example:

ReverseWords.reverseWords("The greatest victory is that which requires no battle");
// should return "battle no requires which that is victory greatest The"
*/


import java.util.*;
import java.util.stream.Collectors;

public class ReverseWords{

 public static String reverseWords(String str){
     //write your code here...
     List<String> words = Arrays.asList(str.split(" "));
     Collections.reverse(words);
     return words.stream().collect(Collectors.joining(" "));
     
 }
}
