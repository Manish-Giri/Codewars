# https://www.codewars.com/kata/arithmetic-progression/train/python

def arithmetic_sequence_elements(a, r, n):
    ap = [a]
    while len(ap) < n:
        last = ap[-1]
        ap.append(last + r)
    return ", ".join(str(x) for x in ap)
    
    
# clever -
def arithmetic_sequence_elements(a, r, n):
    return ', '.join(str(a + b * r) for b in xrange(n))
    
