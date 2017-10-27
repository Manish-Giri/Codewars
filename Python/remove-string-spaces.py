# https://www.codewars.com/kata/remove-string-spaces/train/python

import re
def no_space(x):
    return re.sub('\s*', '', x)
