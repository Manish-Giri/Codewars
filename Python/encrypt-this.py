/*
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encrypt_this("Hello") == "72olle"
encrypt_this("good") == "103doo"
encrypt_this("hello world") == "104olle 119drlo"
*/

def encrypt_this(text):
    words = text.split(" ")
    res = []
    for i in words:
        new = ""
        temp = ""
        for j in range(len(i)):
          if j == 0:
            new += str(ord(i[j]))
          elif j == 1:
            temp = i[j]
            new += i[-1]
          elif j == len(i) - 1:
            new += temp
          else:
            new += i[j]  
        res.append(new)
    return " ".join(list(filter(None, res))) 
