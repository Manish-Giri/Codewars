"""
The characters of Chima need your help. Their weapons got mixed up! They need you to write a program that accepts the name of a character in Chima then tells which weapon he/she owns.

For example: for the character "Laval" your program should return the solution "Laval-Shado Valious"

You must complete the following character-weapon pairs:

Laval-Shado Valious,
Cragger-Vengdualize,
Lagravis-Blazeprowlor,
Crominus-Grandorius,
Tormak-Tygafyre,
LiElla-Roarburn.
Return "Not a character" for invalid inputs.
"""

def identify_weapon(character):
    pairs = ['Laval-Shado Valious', 'Cragger-Vengdualize', 'Lagravis-Blazeprowlor', 'Crominus-Grandorius', 'Tormak-Tygafyre', 'LiElla-Roarburn']
    weapon = list(filter(lambda x: x.split("-")[0] == character, pairs))
    return weapon[0] if len(weapon) else "Not a character"
    
