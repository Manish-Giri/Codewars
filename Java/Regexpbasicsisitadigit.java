/*
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise
*/
import java.util.regex.*;
public class Regexpbasicsisitadigit {
  public static boolean isDigit(String s) {
    return Pattern.matches("\\d", s);
  }
}
    
