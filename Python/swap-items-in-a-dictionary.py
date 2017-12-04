"""
In this kata, you will take the keys and values of a dictionary and swap them around.

You will be given a dictionary, and then you will want to return a dictionary with the old values as the keys, and list the old keys as values under their original keys.

For example, given the dictionary: {'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'},

you should return: {'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}
Notes:

    The dictionary given will only contain strings
    The dictionary given will not be empty
    You do not have to sort the items in the lists
"""
def switch_dict(dic):
    zp = list(zip(dic.keys(),dic.values()))
    result = {}
    for i in zp:
      if i[1] in result:
        result[i[1]].append(i[0])
      else:
        result[i[1]] = [i[0]]
    return result
    
