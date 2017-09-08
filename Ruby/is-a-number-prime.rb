=begin
Is Prime

Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Example

isPrime(5)
=> true
Assumptions

You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers.
=end

def isPrime(num)
  return false if num < 2
  for d in 2..(num - 1)
   if (num % d) == 0
    return false
   end
  end
  true
end
