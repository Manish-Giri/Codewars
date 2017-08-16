class FirstNonConsecutive {
    private static Integer find(final int[] array) {
      for(int i = 1; i <array.length; i++) {
        if(Math.abs(array[i] - array[i-1]) > 1) {
            return array[i];
        }
      }
        return null;
    }
}
