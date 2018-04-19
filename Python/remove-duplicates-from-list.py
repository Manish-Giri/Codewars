"""
Complete the functionthat removes duplicates from a list of numbers.

The order of the sequence needs to stay the same.
"""

from collections import OrderedDict
def distinct(seq):
    return list(OrderedDict.fromkeys(seq))
    
