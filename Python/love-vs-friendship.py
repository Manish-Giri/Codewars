# https://www.codewars.com/kata/love-vs-friendship/train/python

def words_to_marks(s):
    y = list(map(chr, range(97, 123)))
    data = {v:k for k,v in enumerate(y,1)}
    summ = 0
    for l in s:
      summ += data[l]
    return summ
