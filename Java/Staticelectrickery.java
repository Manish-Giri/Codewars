// https://www.codewars.com/kata/fixme-static-electrickery/train/java

public class Staticelectrickery {

  public static final Dinglemouse INST = new Dinglemouse();
      
  private static final int ONE_HUNDRED = 100;

  private final int value; 

  private Dinglemouse() {
    value = ONE_HUNDRED;
  }
  
  public int plus100(int n) {
    return value + n;
  }
  
}
