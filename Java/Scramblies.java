/*
Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
str1 is 'katas' and str2 is 'steak' should return false.

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
*/

import java.util.*;
import java.util.stream.*;

public class Scramblies {
    
    public static boolean scramble(String str1, String str2) {
        HashMap<String, Integer> secondWord = new HashMap<>();
        Arrays.stream(str2.split(""))
                .forEach(letter -> {
                    if(secondWord.containsKey(letter)) {
                        secondWord.put(letter, secondWord.get(letter) + 1);
                    }
                    else {
                        secondWord.put(letter, 1);
                    }
                });

        HashMap<String, Integer> firstWord = new HashMap<>();
        Arrays.stream(str1.split(""))
                .forEach(letter -> {
                    if(firstWord.containsKey(letter)) {
                        firstWord.put(letter, firstWord.get(letter) + 1);
                    }
                    else {
                        firstWord.put(letter, 1);
                    }
                });
        for(Map.Entry<String, Integer> entry: secondWord.entrySet()) {
            String currKey = entry.getKey();
            Integer currKeyCount = entry.getValue();
            Integer origCount = firstWord.get(currKey);
            if (origCount == null) {
                return false;
            }
            if(origCount < currKeyCount) {
                return false;
            }
        }
        return true;
    }
}
