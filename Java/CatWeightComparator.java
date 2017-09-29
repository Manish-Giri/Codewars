/*
In this kata, you will be creating a Java Comparator to sort cats by their weight.

The Cat class is preloaded for you., and its signature is given below:

public class Cat implements Comparable<Cat>
{
  public String name;
  public double weight;

  public Cat(String name, double weight);

  @Override
  public int compareTo(Cat c);

  @Override
  public boolean equals(Object o);
}

In the tests, an array of cats will be populated, and then sorted using Arrays.sort(). By default, this will sort the cats by their names. Your job is to complete the implementation of CatWeightComparator so that the cats are sorted by weight.

You may assume that no two cats have the same name.
*/

class Cat implements Comparable<Cat>
{
  public String name;
  public double weight;

  public Cat(String name, double weight);

  @Override
  public int compareTo(Cat c);

  @Override
  public boolean equals(Object o);
}

import java.util.Comparator;

public class CatWeightComparator implements Comparator<Cat>
{
  @Override
  public int compare(Cat cat1, Cat cat2)
  {
    return new Double(cat1.weight).compareTo(new Double(cat2.weight));
  }
}

