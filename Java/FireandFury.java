/*
The President's phone is broken

He is not very happy.

The only letters still working are uppercase E, F, I, R, U, Y.

An angry tweet is sent to the department responsible for presidential phone maintenance.

Kata Task

Decipher the tweet by looking for words with known meanings.

FIRE = "You are fired!"
FURY = "I am furious."
If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."

Notes

The tweet reads left-to-right.
Any letters not spelling words FIRE or FURY are just ignored
If multiple of the same words are found in a row then plural rules apply -
FIRE x 1 = "You are fired!"
FIRE x 2 = "You and you are fired!"
FIRE x 3 = "You and you and you are fired!"
etc...
FURY x 1 = "I am furious."
FURY x 2 = "I am really furious."
FURY x 3 = "I am really really furious."
etc...
Examples

ex1. FURYYYFIREYYFIRE = "I am furious. You and you are fired!"
ex2. FIREYYFURYYFURYYFURRYFIRE = "You are fired! I am really furious. You are fired!"
ex3. FYRYFIRUFIRUFURE = "Fake tweet."
*/

package codewars.katas;

public class FireandFury {
    private static String fireAndFury(final String tweet) {
        // Your code here

        // allowed letters
        String correct = "FIREUY";

        // if input tweet contains letters outside of what are correct letters, return fake tweet
        String[] tweetLetters = tweet.split("");

        for(String s: tweetLetters) {
            if (!correct.contains(s)) {
                return "Fake tweet.";
            }
        }

        // final string - use SB for efficiency (multiple appends)
        StringBuilder finalTweet = new StringBuilder();

        // to remember last word matched (for back to back comparisons)
        String lastMatch = "";

        // meanings
        StringBuilder fireTweet = new StringBuilder("You are fired!");
        StringBuilder furyTweet = new StringBuilder("I am furious.");

        // to keep track of current index in string
        int currentStringIndex = 0;

        // loop until there are 4 letters left to extract in string
        while (currentStringIndex <= tweet.length() - 4) {
            // starting at current index in string, find the next occurrence of "F"
            int currentPos = tweet.indexOf("F", currentStringIndex);
            
            // if "F" is not found, increment current string index by 1
            if (currentPos == -1) {
                ++currentStringIndex;
            } 
            
            else {
                // if F is found - extract the next 3 letters and compare if the word is FURY or FIRE
                String extracted = tweet.substring(currentPos, currentPos + 4);
                
                if (extracted.equals("FIRE")) {
                    // increment by currentPos and 3 
                    currentStringIndex = (currentPos + 3);
                    
                    if (lastMatch.equals("FIRE")) {
                        
                        // if last match was also FIRE, need to replace "YOU ARE FIRED"
                        // with "YOU AND YOU ARE FIRED - find index of "YOU" from the last
                        // so as to not replace first or earlier occurrences of "YOU ARE FIRED"
                        int youPos = finalTweet.lastIndexOf("You");
                        String toAppend = " and you";
                        // insert " and you" from the found pos + 2 chars
                        finalTweet.insert(youPos + 3, toAppend.toCharArray());
                    } else {
                        // if last match was not FIRE, just append with a space
                        finalTweet.append(fireTweet).append(" ");
                    }
                    // set last match to FIRE
                    lastMatch = "FIRE";
                } else if (extracted.equals("FURY")) {
                    // same logic as FIRE
                    currentStringIndex = (currentPos + 3);
                    if (lastMatch.equals("FURY")) {
                        int amPos = finalTweet.lastIndexOf("am");
                        String toAppend = " really";
                        finalTweet.insert(amPos + 2, toAppend.toCharArray());
                    } else {
                        finalTweet.append(furyTweet).append(" ");
                    }
                    lastMatch = "FURY";
                } else {
                    currentStringIndex += 3;
                }
            }
        }
        if (finalTweet.length() > 0) {
            // remove trailing whitespace from returned string
            return finalTweet.toString().trim();
        }
        return "Fake tweet.";
    }

    public static void main(String[] args) {
        
        // test inputs
        //String t = "FURYYYFIREYYFIRE";
        String t = "FIREYYFURYYFURYYFURRYFIRE";

        String[] first = {"EIRERURYFIRERURYIURYFIREYIREEURYRIREUURYIIREEURYYURYRIREFURYIIREYIREIIREUURY",
                "RIREFIREYURYEURY", "RIREIURYYURY", "YURYRIRERURY",
                "RIREIURYYURYIURYYIRERURYRURYYURYUIREFURYRIREEIREIURY", "RIREUIREFIRERIRE",
                "FURYIURYYIREFIREFURYIIREYURYFURYEURYYURYIIREYURYUURYRIREEURYYURY"
        };

        String[] second = {"AAFIREBBFURYCC", "FIRE",  "FURY"};
        System.out.print(fireAndFury(second[0]));
    }
}
