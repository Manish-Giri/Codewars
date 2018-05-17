# https://www.codewars.com/kata/do-you-speak-retsec/train/python

def reverse_by_center(s):
    mid = len(s)//2
    return s[mid+1:] + s[mid] + s[:mid] if len(s)%2 else s[mid:] + s[:mid]
    
