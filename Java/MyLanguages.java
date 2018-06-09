/*
Your task
Given a list of languages and your respective test results, return the list of languages where your test score is at least 60, in descending order of the results.

Note: There will be no duplicate values.

Examples
{"Java" => 10, "Ruby" => 80, "Python" => 65}  --> ["Ruby", "Python"]
{"Hindi" => 60, "Dutch" => 93, "Greek" => 71} --> ["Dutch", "Greek", "Hindi"]
{"C++" => 50, "ASM" => 10, "Haskell" => 20}   --> []
My other katas
If you enjoyed this kata then please try my other katas! :-)

Translations are welcome!
*/

package com.codewars.anter69;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class MyLanguages {
  public static List<String> myLanguages(final Map<String, Integer> results) {
    return results.entrySet().stream().filter(x -> x.getValue() >= 60).sorted((e1,e2)->e2.getValue().compareTo(e1.getValue())).map(x->x.getKey()).collect(Collectors.toList());
  }
}
