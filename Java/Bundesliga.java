/*On 08/26/2016 (26.08.2016) the German Fussball-Bundesliga (national soccer league) started another new season!

In this kata you get an array with 9 strings, which contain the matches from the first match day.
Every string has this format, where x and y are the number of goals for the teams, if the match has already been played:

x:y [Team 1] - [Team 2]

Example:
6:0 FC Bayern München - Werder Bremen
-:- Eintracht Frankfurt - Schalke 04

The team, which has shot more goals than the other team, wins the match.

Your method should create and return the league table as one string.

Every line in the table follows these rules:

 1. Tableplace with two chars and a dot (" 1.", "12.")
 2. Space
 3. Name of the team/club padded right up to 30 chars (filled up with spaces).
 4. Number of played matches (in this kata always only one digit)
 5. Two spaces
 6. Number of won matches (in this kata always only one digit)
 7. Two spaces
 8. Number of tie matches (in this kata always only one digit)
 9. Two spaces
10. Number of lost matches (in this kata always only one digit)
11. Two spaces
12. Differences of goals (shot vs. gotten)
13. Two spaces
14. Count of points

It is 3 points for a won match and 1 point for a tie.
The table has to be sorted by these criteria:

1. Points
2. If the points are the same: The difference of goals. (2:0 is better than 1:0)
3. If the difference of goals is the same: More goals are better! (2:1 is better than 1:0)
4. Otherwise: The teams share the same place, but ordered by the name of the team (case-insensitive!)!

Example with the two matches above, if the league WOULD only have 4 teams:

 1. FC Bayern München             1  1  0  0  6:0  3 
 2. Eintrach Frankfurt            0  0  0  0  0:0  0
 2. Schalke 04                    0  0  0  0  0:0  0
 4. Werder Bremen                 1  0  0  1  0:6  0

You do not have to do a check for the input values. It will always be an array of 9 strings and all strings will be complete!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

package codewars.katas.bundes;

import java.util.*;

@SuppressWarnings("Duplicates")
public class Bundesliga {
    public static String table(String[] results)
    {

        LinkedHashMap<String, String[]> table = new LinkedHashMap<>();

        for(String s: results) {

            String scoreBit = s.substring(0,3);
            String[] scores = scoreBit.split(":");
            String firstTeamScore = scores[0];
            String secondTeamScore = scores[1];


            String teamBit = s.substring(4);
            String[] teams = teamBit.split("-");
            String firstTeam = teams[0].trim();
            String secondTeam = teams[1].trim();

            String[] firstTeamResult = new String[6];
            String[] secondTeamResult = new String[6];

            // check scores

            if(firstTeamScore.startsWith("-")) {
                // set first team stats
                for(int i = 0 ; i < firstTeamResult.length; i++) {
                    firstTeamResult[i] = "0";
                }

                // set second team stats
                for(int i = 0 ; i < secondTeamResult.length; i++) {
                    secondTeamResult[i] = "0";
                }

                // update map
                table.put(firstTeam, firstTeamResult);
                table.put(secondTeam, secondTeamResult);

                // update goal diff as 0:0
                String diff = "0:0";
                firstTeamResult[4] = diff;
                secondTeamResult[4] = diff;
            }

            else {
                // get first team score
                int teamOneGoals = Integer.parseInt(firstTeamScore);
                int teamTwoGoals = Integer.parseInt(secondTeamScore);


                // increment games played each team
                firstTeamResult[0] = "1";
                secondTeamResult[0] = "1";


                // check who won
                if(teamOneGoals > teamTwoGoals) {
                    // increment team one won
                    // first team wins and loss
                    firstTeamResult[1] = "1";
                    firstTeamResult[3] = "0";

                    //points is
                    firstTeamResult[5] = "3";

                    // second team wins and loss
                    secondTeamResult[1] = "0";
                    secondTeamResult[3] = "1";
                    secondTeamResult[5] = "0";

                    // set ties to 0
                    firstTeamResult[2] = "0";
                    secondTeamResult[2] = "0";
                }

                if(teamOneGoals < teamTwoGoals) {
                    // increment team one won
                    // first team wins and loss
                    firstTeamResult[1] = "0";
                    firstTeamResult[3] = "1";
                    // second team wins and loss
                    secondTeamResult[1] = "1";
                    secondTeamResult[3] = "0";


                    //points is
                    firstTeamResult[5] = "0";
                    secondTeamResult[5] = "3";

                    // set ties to 0
                    firstTeamResult[2] = "0";
                    secondTeamResult[2] = "0";

                }

                else if(teamOneGoals == teamTwoGoals) {
                    firstTeamResult[2] = "1";
                    secondTeamResult[2] = "1";


                    //points is
                    firstTeamResult[5] = "1";
                    secondTeamResult[5] = "1";


                    // put 0 in won
                    firstTeamResult[1] = "0";
                    secondTeamResult[1] = "0";

                    // put 0 in lost
                    firstTeamResult[3] = "0";
                    secondTeamResult[3] = "0";

                }

                String goalDiff = scoreBit;

                firstTeamResult[4] = goalDiff;
                // reverse for second team
                secondTeamResult[4] = new StringBuilder(goalDiff).reverse().toString();
            }



            // add to map
            table.put(firstTeam, firstTeamResult);
            table.put(secondTeam, secondTeamResult);
        }

        return sortTable(table);
        //return "";
    }

    private static String sortTable(LinkedHashMap<String, String[]> tab) {

        // sort table
        List<String[]> table = new ArrayList<>(tab.values());

        // get keys
        //LinkedHashSet<String> teamNamesSet = (LinkedHashSet<String>) tab.keySet();
        List<String> teamNamesList = new ArrayList<>(tab.keySet());


        String[] tempResult = new String[table.size()];


        for(int i = 0; i < table.size(); i++) {
            StringBuilder sb = new StringBuilder();
            String joined = String.join(" ", table.get(i));
            String teamName = teamNamesList.get(i).replaceAll(" ", "");


            sb.append(teamName).append(" ").append(joined);
            tempResult[i] = sb.toString();
        }

        Arrays.sort(tempResult, new Comparator<String>() {

            @Override
            public int compare(String o1, String o2) {
                // TODO Auto-generated method stub

                // check by points
                int lastIndexOne = Character.valueOf(o1.charAt(o1.length()-1));
                int lastIndexTwo = Character.valueOf(o2.charAt(o2.length()-1));
                if(lastIndexOne > lastIndexTwo) {
                    return -1;
                }
                else if(lastIndexOne < lastIndexTwo) {
                    return 1;
                }
                else {
                    //return 0;

                    // calculate goal diff
                    String[] firstTeamString = o1.split(" ");
                    //System.out.println(Arrays.toString(firstTeamString));
                    String firstTeamGoalDiff = firstTeamString[5];
                    //System.out.println(firstTeamGoalDiff);
                    String[] patt = firstTeamGoalDiff.split(":");
                    //System.out.println(Arrays.toString(patt));
                    int firstdiff = (Integer.parseInt(patt[0]) - Integer.parseInt(patt[1]));

                    String[] secTeamString = o2.split(" ");
                    String secTeamGoalDiff = secTeamString[5];
                    String[] patt2 = secTeamGoalDiff.split(":");
                    int seconddiff = (Integer.parseInt(patt2[0]) - Integer.parseInt(patt2[1]));

                    if(firstdiff > seconddiff) {
                        return -1;
                    }

                    else if(firstdiff < seconddiff) {
                        return 1;
                    }

                    else if(firstdiff == seconddiff) {
                        //return 0;

                        // more goals
                        int firstFor = Integer.parseInt(patt[0]);
                        int secondFor = Integer.parseInt(patt2[0]);

                        if(firstFor > secondFor) {
                            return -1;
                        }

                        else if(firstFor < secondFor) {
                            return 1;
                        }

                        else {
                            // sort by names
                            int d = firstTeamString[0].compareToIgnoreCase(secTeamString[0]);
                            if(d < 1) {
                                return -1;
                            }
                            else if(d > 1) {
                                return 1;
                            }
                            else {
                                return 0;
                            }

                        }


                    }



                }
                return -1;
            }


        });



        // correct team names
        StringBuilder[] teamSB = new StringBuilder[tempResult.length];

        for(int i = 0; i < tempResult.length; i++) {
            teamSB[i] = new StringBuilder(tempResult[i]);
        }

        String[] cloned = new ArrayList<>(teamNamesList).toArray(new String[teamNamesList.size()]);
        for(int i = 0; i < cloned.length; i++) {
            cloned[i] = cloned[i].replaceAll(" ", "");
        }

        //System.out.println("Cloned->");
        //System.out.println(Arrays.toString(cloned));
        String[] teamNamesArr = new String[teamNamesList.size()];
        for(int i = 0; i < teamSB.length; i++) {

            //String toFind = teamNamesList.stream().anyMatch(e -> e.replaceAll(" ", "").equals(teamSB[i].toString())).;
            int foundPos = -1;
            //System.out.println("Current word => " + teamSB[i].toString());
            int lenOfReplace = teamSB[i].indexOf(" ");
            String matched = teamSB[i].toString().substring(0, lenOfReplace);
            for(int k = 0; k < cloned.length; k++) {
                if(cloned[k].equals(matched)) {
                    foundPos = k;
                    //System.out.println("inside = " + foundPos);
                    break;
                }
            }

            //System.out.println(foundPos);

            String replaceWith = teamNamesList.get(foundPos);
            //int lenOfReplace = teamSB[i].indexOf(" ");
            teamNamesArr[i] = replaceWith;

            StringBuilder replaced = teamSB[i].replace(0, lenOfReplace, replaceWith);

            teamSB[i] = replaced;


        }

        // convert stringbuilder to string array
        String[] finalRes = new String[teamSB.length];
        for(int i = 0; i < teamSB.length; i++) {
            finalRes[i] = teamSB[i].toString();
        }

        return generateTable(finalRes, teamNamesArr);
    }

    private static String generateTable(String[] entries, String[] sortedNames) {
        final int padSize = 29;

        //System.out.println("array lengths--");
        //System.out.println(Arrays.toString(lengths));


        StringBuilder[] arr = new StringBuilder[entries.length];
        int i = 0;
        for (String s: entries) {
            arr[i] = new StringBuilder(s);
            i++;
        }


        // this changes arr too
        // StringBuilder[] reversed = Arrays.copyOf(arr, arr.length);

        StringBuilder[] reversed = new StringBuilder[entries.length];
        for(int x = 0; x < reversed.length; x++) {
            reversed[x] = new StringBuilder(entries[x]).reverse();
        }

        /*
        List<String> ent = Arrays.asList(entries);
        Collections.reverse(ent);
        String[] reversedEntries = ent.toArray(new String[ent.size()]);
        */


        String[] res = new String[entries.length];

        int rank = 1;
        boolean isLastTeam = false;
        boolean incrementRank = false;

        for(i = 0; i < arr.length; i++) {



            int teamNameLen = sortedNames[i].length();
            int numSpaces = padSize - teamNameLen;
            String spaces;


            // -------------

            // ------------ RANKING -----

            // for first team, insert 1 -
            if(i == 0) {
                arr[i].insert(0, " " + Integer.toString(1) + ". ");
            }

            else {
                // add the rank
                if(incrementRank) {
                    if(i <= 8) {
                        arr[i].insert(0, " " + Integer.toString(i+1) + ". ");
                    }
                    else {
                        arr[i].insert(0, Integer.toString(i+1) + ". ");
                    }
                    // arr[i].insert(0, Integer.toString(i+1) + ". ");
                    rank = i+1;

                }
                else {
                    if(rank <= 9) {
                        arr[i].insert(0, " " +Integer.toString(rank) + ". ");
                    }
                    else {
                        arr[i].insert(0, Integer.toString(rank) + ". ");
                    }
                    // arr[i].insert(0, Integer.toString(rank) + ". ");

                }
            }


            // ------------ SPACING -----
            // TODO: insert spaces here
            // TODO: FIND SPACING BUG

            if(i >= 9) {
               /* if(i == 9) {
                    spaces = String.join("", Collections.nCopies(numSpaces, " "));
                }
                else {
                    spaces = String.join("", Collections.nCopies(numSpaces - 1, " "));

                }*/

                // WTF IS THIS SHIT????

                int r = Integer.parseInt(reversed[i].toString().split(" ")[5]);

                if(r == 0) {
                    spaces = String.join("", Collections.nCopies(numSpaces, " "));

                }
                else {
                    spaces = String.join("", Collections.nCopies(numSpaces, " "));

                }

                // spaces = String.join("", Collections.nCopies(numSpaces - 1, " "));
            }
            else {
                spaces = String.join("", Collections.nCopies(numSpaces, " "));
            }

            arr[i].insert(teamNameLen+4, spaces);


            // arr[i].insert(0, Integer.toString(i+1) + ".

            // --- insert spaces in points

            String points = arr[i].substring(35);
            StringBuilder replacedWithSpace = new StringBuilder(points.replace(" ", "  "));
            StringBuilder finalReplaced = new StringBuilder(arr[i].substring(0, 35)).append(replacedWithSpace);

            arr[i] = finalReplaced;


            res[i] = arr[i].toString();

            // check for last team
            if(i == arr.length - 1) {
                isLastTeam = true;
            }



            /**
             * DONE- : CRITERIA FOR RANKING TEAMS -
             * 1. Check points, if next team has lesser points - increment rank
             * 2. If rank same, check goal diff - if next team has lesser diff, inc. rank
             * 3. If goal diff same, check for goals - if next team has lesser for goal, inc. rank
             */

            /**
             * Ranking algo -
             * if first team - rank 1, and insert
             * compare with next team and decide if rank is same or to be increased - set incrementRank accordingly
             * if incrementRank is true - rank will be one plus current loop counter, else same as lastRank
             */
            // if this is not last team, check
            if(!isLastTeam) {

                // check if points of next team is different than this team
                if(Character.getNumericValue(arr[i].charAt(arr[i].length()-1)) > Character.getNumericValue(arr[i+1].charAt(arr[i+1].length()-1))) {
                    incrementRank = true;
                }

                // same points
                else {

                    // check goal diff
                    // int currTeamPos = (reversedEntries.length - 1) - i;
                    //int currTeamPos = (reversedEntries.length - 1) - i;
                    String currGoalDiff = reversed[i].substring(2,5);
                    int currFor = Character.getNumericValue(currGoalDiff.charAt(2));
                    int currAgainst = Character.getNumericValue(currGoalDiff.charAt(0));


                    //int nextTeamPos = (reversedEntries.length - 1) - (i+1);
                    String nextGoalDiff =  reversed[i+1].substring(2,5);
                    int nextFor = Character.getNumericValue(nextGoalDiff.charAt(2));
                    int nextAgainst = Character.getNumericValue(nextGoalDiff.charAt(0));


                    // rank acc. to goal diff
                    if((currFor - currAgainst) > (nextFor - nextAgainst)) {
                        incrementRank = true;
                    }

                    // if same goal diff
                    else {

                        // rank by higher goal for
                        if(currFor > nextFor) {
                            incrementRank = true;
                        }

                        else if(currFor == nextFor) {
                            incrementRank = false;
                        }


                    }


                }


            }

        }

        /*
        System.out.println("---RETURN FINAL---");

        for(String s: res) {
            System.out.println(s);
        }
        */

        // for final return
        List<String> toJoin = Arrays.asList(res);
        String finalJoined = String.join("\n", toJoin);
        // System.out.println(finalJoined.trim());

        return finalJoined.replaceAll("\\s+$", "");
    }

    public static void main(String[] args) {
        String[] friday = new String[]
                {
                        "6:0 FC Bayern Muenchen - Werder Bremen",
                        "-:- Eintracht Frankfurt - Schalke 04",
                        "-:- FC Augsburg - VfL Wolfsburg",
                        "-:- Hamburger SV - FC Ingolstadt",
                        "-:- 1. FC Koeln - SV Darmstadt",
                        "-:- Borussia Dortmund - FSV Mainz 05",
                        "-:- Borussia Moenchengladbach - Bayer Leverkusen",
                        "-:- Hertha BSC Berlin - SC Freiburg",
                        "-:- TSG 1899 Hoffenheim - RasenBall Leipzig"
                };


        String[] saturday = new String[]
                {
                        "6:0 FC Bayern Muenchen - Werder Bremen",
                        "1:0 Eintracht Frankfurt - Schalke 04",
                        "0:2 FC Augsburg - VfL Wolfsburg",
                        "1:1 Hamburger SV - FC Ingolstadt",
                        "2:0 1. FC Koeln - SV Darmstadt",
                        "2:1 Borussia Dortmund - FSV Mainz 05",
                        "2:1 Borussia Moenchengladbach - Bayer Leverkusen",
                        "-:- Hertha BSC Berlin - SC Freiburg",
                        "-:- TSG 1899 Hoffenheim - RasenBall Leipzig"
                };

        String[] sunday = new String[]
                {
                        "6:0 FC Bayern Muenchen - Werder Bremen",
                        "1:0 Eintracht Frankfurt - Schalke 04",
                        "0:2 FC Augsburg - VfL Wolfsburg",
                        "1:1 Hamburger SV - FC Ingolstadt",
                        "2:0 1. FC Koeln - SV Darmstadt",
                        "2:1 Borussia Dortmund - FSV Mainz 05",
                        "2:1 Borussia Moenchengladbach - Bayer Leverkusen",
                        "2:1 Hertha BSC Berlin - SC Freiburg",
                        "2:2 TSG 1899 Hoffenheim - RasenBall Leipzig"
                };



        System.out.println(table(sunday));
    }

}


