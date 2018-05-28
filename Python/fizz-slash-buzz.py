# https://www.codewars.com/kata/fizz-slash-buzz/train/python

def solution(number):
    A,B,C = 0,0,0
    for i in range(1, number):
        if not i%3 and not i%5:
            C += 1
        if not i%3 and i%5:
            A += 1
        if not i%5 and i%3:
            B += 1
    return [A,B,C]        
          
