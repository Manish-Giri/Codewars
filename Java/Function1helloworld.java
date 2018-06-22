/*
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?
*/

import java.util.stream.Collectors;
public class Function1helloworld {
  public static String greet() {
    return "hello world!".chars().mapToObj(c -> String.valueOf((char)c)).collect(Collectors.joining(""));
  }
}
