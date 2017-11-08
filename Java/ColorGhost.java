/*
Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

Ghost ghost = new Ghost();
ghost.getColor(); //=> "white" or "yellow" or "purple" or "red"
*/

import java.util.Random;

public class Ghost {
  private String color;
  private String[] colors = {"white", "yellow", "purple", "red"};
  
  public Ghost() {
    Random r = new Random();
    int lowerBound = 0;
    int upperBound = colors.length;
    int result = r.nextInt(upperBound-lowerBound);
    color = colors[result];
  }
  public String getColor() {
    return this.color;
  }
  public void setColor(String color) {
    this.color = color;
  }
}
