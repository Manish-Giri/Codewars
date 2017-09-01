/*
Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

Create a function, only_oddDigPrimes(), that receive any positive integer n, and output a list like the one bellow:

[number pure odd digit primes bellow n, largest pure odd digit prime smaller than n, smallest pure odd digit prime higher than n]

Let's see some cases:

only_oddDigPrimes(20) ----> [7, 19, 31]
///7, beacause we have seven pure odd digit primes bellow 20 and are 3, 5, 7, 11, 13, 17, 19
19, because is the nearest prime of this type to 20
31, is the first pure odd digit that we encounter after 20///

only_oddDigPrimes(40) ----> [9, 37, 53]
In the case that n, the given value, is a pure odd prime, should be counted it with the found primes and search for the inmediately bellow and the inmediately after.

Happy coding!!
*/

import java.util.*;
public class OddDigPrime {
    
  private static boolean isPurePrime(int n) {
     String num = Integer.toString(n);
     char[] numbers = num.toCharArray();
     for(int i = 0; i < numbers.length; i++) {
        if(( (int) numbers[i]) % 2 == 0) {
         return false;
        }
     }
    return true; 
    }
    
    private static int[] generatePurePrimes(int n) {
    List<Integer> primes = new ArrayList<>();
     for(int i = 3; i <= n; i++) {
       if(isPrime(i) && isPurePrime(i)) {
         primes.add(i);
      }
     }
    return primes.stream().mapToInt(x -> x).toArray();
    }
    
    private static boolean isPrime(int n) {
     int sq = (int) Math.sqrt(n);
     for(int i = 2; i <= sq; i++) {
      if(n % i == 0) {
       return false;
      }
      
     } 
     return true;
    }
     
  
  private static int findLargestPurePrime(int n) {
   int largest = Integer.MAX_VALUE; 
    for(int i = n + 1; i < largest; i++) {
      if(isPrime(i) && isPurePrime(i)) {
        return i;
      }
      
    }
    return -1;
    
  }
  
  
  private static int[] returnResult(int n) {
    int[] result = generatePurePrimes(n);
    // number of pure primes
    int firstResult = result.length;
    // shortest pure prime to number n
    int secondResult = result[result.length - 1];
    // smallest pure prime larger than n
    int thirdResult = findLargestPurePrime(n);
    
    int[] answer = new int[]{firstResult, secondResult, thirdResult};
    return answer;     
  }
    
    public static long[] onlyOddDigPrimes(long n) {
        // your code
       int input = (int) n;
       int[] answer = returnResult(input);
       long[] longArray = Arrays.stream(answer).mapToLong(i -> i).toArray();
       return longArray; 
        
    }
}
