// https://www.codewars.com/kata/who-won-the-election/train/java

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
public class BallotsCounter {
    public static String getWinner(final List<String> listOfBallots) {
       Map<String, Long> counts = listOfBallots.stream()
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
       return counts.entrySet().stream().filter(e -> e.getValue() > listOfBallots.size() / 2)
                .map(Map.Entry::getKey).findFirst().orElse(null);         
    }
}
