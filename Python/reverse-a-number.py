# https://www.codewars.com/kata/reverse-a-number/train/python

def reverse_number(n):
    r = int(str(abs(n))[::-1])
    return -r if n < 0 else r
    
