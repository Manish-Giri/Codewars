# https://www.codewars.com/kata/string-matchup/train/python

def solve(a,b):
    res = []
    count = 0
    for word in b:
        for w in a:
            if word == w:
                count += 1
        res.append(count)
        count = 0
    return res
    
    
