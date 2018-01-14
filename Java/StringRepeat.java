/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

import java.util.Collections;
public class Solution {
    public static String repeatStr(final int repeat, final String string) {
        return repeat < 0 ? "" : String.join("", Collections.nCopies(repeat, string));
    }
}
