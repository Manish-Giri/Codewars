/*
Your task is very simple. Just write a function alphabetic(s), which takes an input string s in lowercase and returns True/False depending on whether the string is in alphabetical order or not.

For example, alphabetic('kata') is False as 'a' comes after 'k', but alphabetic('ant') is True.

Good luck :)
*/

def alphabetic(s):
    return s == "".join(sorted(s))
    
