"""
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
"""

from collections import Counter
def find_it(seq):
    counts = list(Counter(seq).items())
    for x in counts:
        if x[1] % 2 != 0:
            return x[0]
    return None
    
    
from functools import reduce
def find_it(seq):
    return reduce(lambda x, y: x^y, seq)
