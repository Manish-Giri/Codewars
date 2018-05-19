/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

import java.util.stream.IntStream;
class RowSumOddNumbers {
    public static int rowSumOddNumbers(int n) {
      return n == 1 ? 1 : IntStream.rangeClosed(lastOddNumber(n-1)+2, lastOddNumber(n)).filter(i -> i%2!=0).sum();
    }
    private static int lastOddNumber(int level) {
        if(level <= 1) {
            return 1;
        }
        else {
            int last = lastOddNumber(level-1);
            for(int i = 1; i <= level; i++) {
                last += 2;
            }
            return last;
        } 
    }
}
