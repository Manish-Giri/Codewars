# https://www.codewars.com/kata/refactored-greeting/train/python

class Person:
    def __init__(self, name):
        self.name = name
    def greet(self, name):
        return "Hello {}, my name is {}".format(name, self.name)
        
