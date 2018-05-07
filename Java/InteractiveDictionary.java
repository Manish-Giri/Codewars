/*
In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

Dictionary d = new Dictionary();

d.newEntry("Apple", "A fruit that grows on trees");

System.out.println(d.look("Apple"));
>>> A fruit that grows on trees

System.out.println(d.look("Banana"));
>>> Cant find entry for Banana
Good luck and happy coding!
*/

import java.util.HashMap;
public class InteractiveDictionary
{
  private HashMap<String, String> map;
  public InteractiveDictionary() {
    map = new HashMap<>();
  }
  public void newEntry(String key, String value) {
    map.put(key, value);
  }
  public String look(String key) {
    return map.getOrDefault(key, "Cant find entry for " + key);
  }
}
