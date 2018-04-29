# https://www.codewars.com/kata/array2binary-addition/train/python

"""
Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == False
"""

def arr2bin(arr):
    return "{0:b}".format(sum(arr)) if all(type(x) is int for x in arr) else False
