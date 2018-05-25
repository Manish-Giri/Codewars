# https://www.codewars.com/kata/highest-rank-number-in-an-array/train/python

from collections import defaultdict
def highest_rank(arr):
    d = defaultdict(int)
    for k in arr:
      d[k] += 1
    return max(list(d.keys())) if(len(set(d.values())) == 1) else max(d, key=d.get)
  
# clever
#     return sorted(arr,key=lambda x: (arr.count(x),x))[-1]
