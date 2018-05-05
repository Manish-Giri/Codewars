# https://www.codewars.com/kata/three-added-characters/train/python

def added_char(s1, s2):  
  for x in s2:
      if x not in s1:
          return x
  return [x for x in s2 if s2.count(x) > s1.count(x)][0]
  
