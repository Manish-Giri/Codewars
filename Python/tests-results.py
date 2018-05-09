# https://www.codewars.com/kata/tests-results/train/python

def test(r):
    avgDict = {"h": 0, "a": 0, "l": 0}
    avg = round((sum(r)/len(r)), 3)
    for s in r:
        if s == 9 or s == 10:
            avgDict["h"] += 1
        elif s == 7 or s == 8:
            avgDict["a"] += 1
        else: 
            avgDict["l"] += 1
    res = [avg, avgDict]
    if not avgDict["a"] and not avgDict["l"]:
        res.append('They did well')
    return res    
    
