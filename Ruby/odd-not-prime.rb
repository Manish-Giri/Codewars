=begin
For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.

Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2
=end

def odd_not_prime(num)
  require 'prime'
  (1..num).to_a.select {|n| n.odd? && !n.prime?}.length
end
