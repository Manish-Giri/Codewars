# https://www.codewars.com/kata/dictionary-merge/train/python

def merge(*dicts):
    res = {}
    for dict in dicts:
        for k,v in dict.items():
            if k in res:
                res[k].append(v)
            else:
                res[k] = [v]
    return res
    
