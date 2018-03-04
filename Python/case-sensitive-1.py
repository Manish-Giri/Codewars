/*
Your task is very simple. Given an input string s, case_sensitive(s), check whether all letters are lowercase or not. Return True/False and a list of all the entries that are not lowercase in order of their appearance in s.

For example, case_sensitive('codewars') returns [True, []], but case_sensitive('codeWaRs') returns [False, ['W', 'R']].

Have a look at my other katas!

*/

def case_sensitive(s):
    lowers = [x for x in s if not x.islower()]
    return [False, lowers] if len(lowers) > 0 else [True, []] 
    
