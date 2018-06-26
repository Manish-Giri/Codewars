/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram "Dermatoglyphics" == true
isIsogram "moose" == false
isIsogram "aba" == false
*/

import java.util.*;
public class Isograms {
    public static boolean  isIsogram(String str) {
        // clever
        //return str.length() == str.toLowerCase().chars().distinct().count();
        
        return str.length() == 0 ? true : str.length() == new HashSet<>(Arrays.asList(str.toLowerCase().split(""))).size();
    } 
}
