/*
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/

public class Greeter {
  public static String greet(String name) {
    return name.equals("Johnny") ? "Hello, my love!" : String.format("Hello, %s!", name);
  }
}
