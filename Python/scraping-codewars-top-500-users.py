"""
You should get and parse the html of the codewars leaderboard page.

You can use Nokogiri(Ruby) or BeautifulSoup(Python) or CheerioJS(Javascript).
For Javascript: Return a Promise resolved with your 'Leaderboard' Object!

You must meet the following criteria:

Return a 'Leaderboard' object with a position property.
Leaderboard#position should contain 500 'User' objects.
Leaderboard#position[i] should return the ith ranked User(1 based index).
Each User should have the following properties:

User#name    # => the user's username, not their real name
User#clan    # => the user's clan, empty string if empty clan field
User#honor   # => the user's honor points as an integer
Ex:

  an_alien = leaderboard.position[3]   # => #<User:0x3124da0 @name="myjinxin2015", @clan="China Changyuan", @honor=21446>
  an_alien.name                        # => "myjinxin2015"
  an_alien.clan                        # => "China Changyuan"
  an_alien.honor                       # => 21446
"""

from bs4 import BeautifulSoup
import urllib.request
import http.client
from collections import UserList

URL = 'https://www.codewars.com/users/leaderboard'

class MyList(UserList):

    def __init__(self, data):
        super().__init__(data)

    def __getitem__(self, item):
        return self.data[item-1]

class Leaderboard:
    def __init__(self):
        self.position = MyList([])
        
    def __getitem__(self, key):
        print(self.position[key-1])
        return self.position[key-1]
        
class User:
    def __init__(self, name, honor, clan=""):
        self.name = name
        self.clan = clan
        self.honor = honor


def connect():
    page = urllib.request.urlopen(URL)
    data = http.client.HTTPResponse.read(page)
    soup = BeautifulSoup(data, 'html.parser')
    return soup.body

def solution():
  body = connect()
  table_rows = body.find('div', attrs={'class':'leaderboard pan'}).find('table').find_all("tr")
  leaderboard =  Leaderboard()
  for i in range(1, len(table_rows)):
        curr_row = table_rows[i]
        user_name = curr_row['data-username']
        row_data = curr_row.find_all('td')
        clan = row_data[2].get_text()
        honor = (int)(row_data[3].get_text())
        user = User(user_name, honor, clan)
        leaderboard.position.append(user)
    
  return leaderboard
  
