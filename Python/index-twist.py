"""
My first Kata, write a function index_finder that returns the index of the first occurance of an item (x) in the list (l), but ignoring the first item in the list. The item will always occur at least once after the first item in the list. For example:

l = ['a','b','c'],x = 'b' >>> returns 1 ('b' occurs first at position 1)

l = ['b','b','b'],x = 'b' >>> returns 1 ('b' occurs first at position 1 if you ignore index 0)

l = ['b','c','b','a'],x = 'b' >>> returns 2 ('b' occurs first at position 2 if you ignore index 0)

l = [0,2,'a','5',0,1,0], x = 0 >>> returns 4 (0 occurs first at position 4 if you ignore index 0)

Please do vote, rank and provide any feedback on the kata.
"""
def index_finder(l,x):
    # return index here
    return l.index(x,1)
