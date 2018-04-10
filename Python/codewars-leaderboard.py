"""
Get the list of Codewars Leaderboard score (aka Honor) in descending order

Note:
if it was the bad timing, the data could be updated during your test cases.
Try several times if you had such experience.
"""

from bs4 import BeautifulSoup
import urllib.request
import http.client
URL = 'https://www.codewars.com/users/leaderboard'

def connect():
    page = urllib.request.urlopen(URL)
    data = http.client.HTTPResponse.read(page)
    soup = BeautifulSoup(data, 'html.parser')
    return soup.body

def get_leaderboard_honor():
    body = connect()
    table_rows = body.find('div', attrs={'class':'leaderboard pan'}).find('table').find_all("tr")
    honor_list = []
    for i in range(1, len(table_rows)):
        curr_row = table_rows[i]
        row_data = curr_row.find_all('td')
        honor = (int)(row_data[3].get_text())
        honor_list.append(honor)
    return honor_list   
    
