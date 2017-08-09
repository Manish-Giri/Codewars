/*
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3 
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3 
 d - 2
 z - 1
The other letters don't have power and are only victims.
*/

function alphabetWar(fight) {
 let left = {'w': 4, 'p':3, 'b':2, 's':1};
 let right = {'m': 4, 'q':3, 'd':2, 'z':1}
 let leftScore = 0;
 let rightScore = 0;
  fight.split('').forEach(letter => {
  left.hasOwnProperty(letter) ? leftScore += left[letter] :  right.hasOwnProperty(letter)? rightScore += right[letter] : 0;

  });
    
   return leftScore === rightScore ? "Let's fight again!" : leftScore > rightScore ? "Left side wins!":"Right side wins!";  
}
