# https://www.codewars.com/kata/sha-256/train/python

import hashlib
def to_sha256(s):
    return hashlib.sha256(s.encode('utf-8')).hexdigest()
    
