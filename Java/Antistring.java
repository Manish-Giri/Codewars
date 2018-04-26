/*
given an input string str, return a string such that

all letters change case
all digits are replaced with it's compliment to 9 (0 => 9, 1 => 8...)
each letter is replaced by it's compliment in the alphabet
(a => z, B => Y, c => x...)
the result is reversed
Example:

        "abcWXY123" => "678bcdXYZ"
only strings with letters and numbers will be passed in.
*/

public class AntiString{

    public static String antiString(String str){
      StringBuilder sb = new StringBuilder();
      for(char c: str.toCharArray()) {
        if(Character.isLetter(c)) {
          char res = 'A';
          if(Character.isUpperCase(c)) {
            res = (char) ('Z' - (c - 'A'));
          }
          else {
            res = (char) ('z' - (c - 'a'));
          }
          if(Character.isUpperCase(res)) {
            res = Character.toLowerCase(res);
          }
          else {
            res = Character.toUpperCase(res);
          }
          sb.append(res);
        }
        else {
          sb.append(9 - Character.getNumericValue(c));
        }
      }
      return sb.reverse().toString();
    }
    
}
