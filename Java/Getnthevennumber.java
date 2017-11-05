/*
Return the Nth Even Number

nthEven(1) //=> 0, the first even number is 0
nthEven(3) //=> 4, the 3rd even number is 4 (0, 2, 4)

nthEven(100) //=> 198
nthEven(1298734) //=> 2597466

The input will not be 0.

Hint: Think Math*/

public class Getnthevennumber {
  public static int nthEven(int n) {
    return 2*(n-1);
  }
}
