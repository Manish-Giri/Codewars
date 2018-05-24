# https://www.codewars.com/kata/string-reordering/train/python

def sentence(List):
     ks = [str(i) for i in sorted([int(k) for i in List for k in i])]
     return " ".join(list(i.values())[0] for i in sorted(List, key=lambda dct: ks.index(list(dct.keys())[0])))
