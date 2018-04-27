# https://www.codewars.com/kata/determine-if-poker-hand-is-flush/train/python

def CheckIfFlush(cards):
    return len(set([c[len(c)-1] for c in cards]))==1
