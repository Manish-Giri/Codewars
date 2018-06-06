/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

class SortedAndHow {
  
  public static String isSortedAndHow(int[] array) {
      return isAscending(array) ? "yes, ascending": isDescending(array) ? "yes, descending": "no";
  }
  
  private static boolean isAscending(int[] array) {
    for(int i = 1; i < array.length; i++) {
      if(array[i] < array[i-1]) {
        return false;
      }
    }
    return true;
  }
  
  
  private static boolean isDescending(int[] array) {
    for(int i = 1; i < array.length; i++) {
      if(array[i] > array[i-1]) {
        return false;
      }
    }
    return true;
  }
  
}
