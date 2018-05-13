# https://www.codewars.com/kata/sort-out-the-men-from-boys-1/train/python

def men_from_boys(arr):
    return sorted(list(set([n for n in arr if not n%2]))) + sorted(list(set([n for n in arr if n%2])), reverse=True)
    
    
