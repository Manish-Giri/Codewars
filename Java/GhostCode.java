/*
Trollencio changed my code! can you fix it? My name is not "dumb!" o( TT_TT )o

Instructions: Fix the code
Input

Javatlacati

Output

Hello my name is Javatlacati

Input

""

Output

Hello world!

*/

public class GhostCode{
  public static String helloName(final String name){
    if(name == null || name.equals(""))
      return "Hello world!";
    else
      return "Hello my name is " + name;
  }
}

