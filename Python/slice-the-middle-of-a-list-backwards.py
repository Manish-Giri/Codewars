"""
Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

reverse_middle([1, 2, 3, 4, 5] should return [4, 3, 2].

reverse_middle(['a', 'b', 'd', 'c'] should return ['d', 'b'].
"""

def reverse_middle(lst):
    mid = len(lst)//2
    return lst[mid-1: mid + 1][::-1] if len(lst) % 2 == 0 else lst[mid-1: mid + 2][::-1]
    
    
