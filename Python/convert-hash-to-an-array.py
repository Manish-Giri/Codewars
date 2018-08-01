# https://www.codewars.com/kata/convert-hash-to-an-array/train/python

def convert_hash_to_array(hash):
   return sorted([[k,v] for (k,v) in hash.items()], key=lambda l: l[0])
   
