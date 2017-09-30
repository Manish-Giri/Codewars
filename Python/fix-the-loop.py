# https://www.codewars.com/kata/fix-the-loop/train/python

def list_animals(animals):
    list = ''
    for i in range(len(animals)):
        list += str(i + 1) + '. ' + animals[i] + '\n'
    return list
