/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

import java.util.stream.Collectors;
public class DisemvowelTrolls {
    public static String disemvowel(String str) {
        String vowels = "aeiouAEIOU";
        return str.chars().filter(c -> vowels.indexOf(c) == -1).mapToObj(c->""+(char)c).collect(Collectors.joining(""));
    }
}

// clever
return str.replaceAll("(?i)[aeiou]" , "");
