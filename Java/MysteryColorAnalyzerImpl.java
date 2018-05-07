// https://www.codewars.com/kata/mystery-colors/train/java

import java.util.List;
import java.util.HashSet;
import java.util.stream.Stream;
public class MysteryColorAnalyzerImpl implements MysteryColorAnalyzer {
  public int numberOfDistinctColors(List<Color> mysteryColors) {
    return new HashSet<>(mysteryColors).size();
  }
  public int colorOccurrence(List<Color> mysteryColors, Color color) {
    return (int) mysteryColors.stream().filter(c -> c == color).count();
  }
}
