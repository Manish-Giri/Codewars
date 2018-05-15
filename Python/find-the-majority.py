# https://www.codewars.com/kata/find-the-majority/train/python

from collections import Counter
def majority(arr):
  items = Counter(arr).most_common(2)
  return None if (len(arr) == 0 or (len(items) == 2 and  items[0][1] == items[1][1])) else items[0][0]
  
