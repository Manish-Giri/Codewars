// https://www.codewars.com/kata/toleetspeak/train/java

import java.util.HashMap;
import java.util.stream.Collectors;
class ToLeetSpeak {
    static String toLeetSpeak(final String speak) {
        HashMap<Character, Character> leetCode = new HashMap<>();
        for (int i = 65; i <= 90 ; i++) {
            char curr = (char) i;
            switch (curr) {
                case 'A': leetCode.put('A', '@');
                break;
                case 'B': leetCode.put('B', '8');
                    break;
                case 'C': leetCode.put('C', '(');
                    break;
                case 'E': leetCode.put('E', '3');
                    break;
                case 'G': leetCode.put('G', '6');
                    break;
                case 'H': leetCode.put('H', '#');
                    break;
                case 'I': leetCode.put('I', '!');
                    break;
                case 'L': leetCode.put('L', '1');
                    break;
                case 'O': leetCode.put('O', '0');
                    break;
                case 'S': leetCode.put('S', '$');
                    break;
                case 'T': leetCode.put('T', '7');
                    break;
                case 'Z': leetCode.put('Z', '2');
                    break;
                default:leetCode.put(curr, curr);
            }
        }
        leetCode.put(' ', ' ');
        return speak.chars().mapToObj(i -> String.valueOf(leetCode.getOrDefault((char)i, (char)i))).collect(Collectors.joining(""));
    }
}
