# https://www.codewars.com/kata/transform-to-prime/train/ruby

require 'prime'
def minimum_number(numbers)
  curr = numbers.sum
  i = 0
  while true
    if (curr+i).prime?
      return i
    end
    i += 1
  end  
end
