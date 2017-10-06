# https://www.codewars.com/kata/sum-times-tables/train/python

def sum_times_tables(table,a,b):
    return sum([e * x for e in table for x in list(range(a,b+1))])
    
