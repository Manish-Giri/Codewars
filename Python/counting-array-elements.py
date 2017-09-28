# https://www.codewars.com/kata/counting-array-elements/train/python

def count(array):
    return {x: array.count(x) for x in set(array)}
