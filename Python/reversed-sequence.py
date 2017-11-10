"""
Get the number n to return the reversed sequence from n to 1.

Example : n==5 >> [5,4,3,2,1]
"""
def reverseseq(n):
    return list(range(1,n+1))[::-1]
