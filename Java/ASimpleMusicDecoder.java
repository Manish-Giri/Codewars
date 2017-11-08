/*
You have been hired by a major MP3 player manufacturer to implement a new music compression standard. In this kata you will implement the DECODER, and its companion kata deals with the ENCODER.
Specification

The input signal is represented as a comma-separated string of integers and tokens (sequence descriptors). Tokens must be expanded as follows.

    number*count is expanded as number repeated count times
    first-last is expanded as a sequence of consecutive numbers starting with first and ending with last. This is true for both ascending and descending order
    first-last/interval is similarly expanded, as sequence starting with first, ending with last, where the numbers are separated by interval. Note that interval does NOT have a sign

Examples

    "1,3-5,7-11,14,15,17-20" is expanded to [1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]
    "0-4/2, 5, 7-9" is expanded to [0, 2, 4, 5, 7, 8, 9]
    "0-4/2, 5, 7-5" is expanded to [0, 2, 4, 5, 7, 6, 5]
    "0-4/2, 5, 7-5, 5*4" is expanded to [0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5]

Input

A string of comma-separated integers and tokens (sequence descriptors)
Output

An array of integers
*/

import java.util.*;
import java.util.stream.*;
import java.util.regex.*;

public class Decoder {
  public int[] uncompress(final String music) {
        String[] parts = music.split(",");
        ArrayList<Integer> decoded = new ArrayList<>();
        for(String s: parts) {
            if(s.contains("*")) {
                String[] expr = s.split("\\*");
                int num = Integer.parseInt(expr[0]);
                int count = Integer.parseInt(expr[1]);
                IntStream.range(0, count).forEach(i -> decoded.add(num));
            }
            
            else if(s.contains("-") && !s.contains("/") && !s.contains("*")) {
                String[] expr = s.split("-");
                int start = Integer.parseInt(expr[0]);
                int end = 0;
                if(expr.length == 3) {
                    end = - Integer.parseInt(expr[2]);
                }
                else if(expr.length == 2) {
                    end = Integer.parseInt(expr[1]);
                }
                if(end > start) {
                    IntStream.rangeClosed(start, end).forEach(decoded::add);
                }
                else {
                    for(int i = start; i >= end; i--) {
                        decoded.add(i);
                    }
                }
            }
            else if(s.contains("/") && !s.contains("*")) {
                String[] expr = s.split("/");
                String[] first = expr[0].split("-");
                int start = Integer.parseInt(first[0]);
                int end = 0;
                if(first.length == 3) {
                    end = - Integer.parseInt(first[2]);
                }
                else if(first.length == 2) {
                    end = Integer.parseInt(first[1]);
                }
                int interval = Integer.parseInt(expr[1]);
                if(end > start) {
                    for(int i = start; i <= end; i+= interval) {
                        decoded.add(i);
                    }
                }
                else {
                    for(int i = start; i >= end; i -= interval) { decoded.add(i);}
                }
            }
            else {
                decoded.add(Integer.parseInt(s));
            }
        }
        return decoded.stream().mapToInt(i -> i).toArray();
   }
}
