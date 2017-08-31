=begin
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

def no_odds( values )
=end

def no_odds( values )
  # Return only non-odd values
  values.select { |num|  num.even? }
end
