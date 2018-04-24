"""
Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
"""

import codecs, re
def hex_hash(code):
    res = 0
    for c in code:
      val = codecs.encode(c.encode(), "hex").decode("utf-8")
      try:
        res += sum(map(int, val))
      except ValueError:
        res += int(re.search(r'\d', val).group(0))
    return res
    
    
