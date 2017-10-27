/*
Write a function reverse(int[]) -> int[] that reverses an array of ints. For example, reverse(new int[] {1, 2, 3, 4, 5}) yields [5, 4, 3, 2, 1].

Here's the catch: you only get one semicolon!

Your function will be tested on very long arrays! Good luck.
*/

public class ArrayReverser {
  public static int[] reverse(int[] a) {
    return java.util.stream.IntStream.range(0, a.length).map(i -> a[a.length - 1 - i]).toArray();
  }
}
