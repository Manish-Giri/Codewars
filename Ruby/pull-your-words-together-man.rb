=begin
Your friend Robbie has successfully created an AI that is capable of communicating in English!

Robbie's almost done with the project, however the machine's output isn't working as expected. Here's a sample of a sentence that it outputs:

["this","is","a","sentence"]
Every time that it tries to say a sentence, instead of formatting it in normal English orthography, it just outputs a list of words.

Robbie has pulled multiple all-nighters to get this project finished, and he needs some beauty sleep. So, he wants you to write the last part of his code, a sentencify function, which takes the output that the machine gives, and formats it into proper English orthography.

Your function should:

Capitalise the first letter of the first word.
Add a period (.) to the end of the sentence.
Join the words into a complete string, with spaces.
Do no other manipulation on the words.
=end

def sentencify(words)
  words.map.with_index {|word, i| 
   case
     when words.length == 1 then word[0].upcase.concat(word.slice(1, word.length-1)).concat(".")
     when i == 0 then word[0].upcase.concat(word.slice(1, word.length-1))
     when i == words.length - 1 then word.concat(".")
     else word
   end
  }.join(" ")
end
