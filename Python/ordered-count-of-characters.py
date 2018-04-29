# https://www.codewars.com/kata/ordered-count-of-characters/train/python

"""
Count the number of occurencences of each character and return it as a list of tuples in order of appearance.

Example:

ordered_count("abracadabra") == [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]
"""

from collections import Counter
def ordered_count(input):
    c = Counter(input)
    return sorted(list(c.items()), key=lambda x: input.index(x[0]))
    
