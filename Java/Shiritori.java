/*
Background:
In Japan, a game called Shiritori is played. The rules are simple, a group of people take turns calling out a word whose beginning syllable is the same as the previous player's ending syllable. For example, the first person would say the word ねこ, and the second player must make a word that starts with こ, like　こむぎ. This repeats until a player can not think of a word fast enough or makes a word that ends in ん, because there are no words that begin with ん　in the Japanese language.

English Shiritori has the same principle, with the first and last letters of words. That being said the lose condition is saying a word that doesn't start with the previous word's last letter or not saying a word quick enough.

For example: apple -> eggs -> salmon -> nut -> turkey ...

Your Task:
You will be given a list of strings, a transcript of an English Shiritori match. Your task is to find out if the game ended early, and return a list that contains every valid string until the mistake. If a list is empty return an empty list. If one of the elements is an empty string, that is invalid and should be handled.

Examples:
All elements valid:
The array {"dog","goose","elephant","tiger","rhino","orc","cat"}

should return {"dog","goose","elephant","tiger","rhino","orc","cat"}

An invalid element at index 2:
The array {"dog","goose","tiger","cat", "elephant","rhino","orc"}

should return ("dog","goose") since goose ends in 'e' and tiger starts with 't'

An invalid empty string at index 2:
The array {"ab","bc","","cd"}

should return ("ab","bc")

All invalid empty string at index 0:
The array {"","bc","","cd"}

should return An Empty List
*/

import java.util.*;
public class Shiritori
{
 public static List<String> theGame(List<String> words)
  {
    List<String> result = new ArrayList<>();
    if(words.size() == 0 || words.get(0).equals("")) return result;
    result.add(words.get(0));
    for(int i = 1; i < words.size(); i++) {
      String prev = words.get(i-1), curr = words.get(i);
      if(curr.equals("")) break;
      if(curr.charAt(0) == prev.charAt(prev.length()-1)) {
        result.add(curr);
      }
      else {
        break;
      }
    } 
    return result;
  }
}
