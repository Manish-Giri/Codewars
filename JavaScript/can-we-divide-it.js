// Your task is to create functionisDivideBy (is_divide_by for C# and Python) to check if an integer number is divisible by each out of two arguments.

function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0;
}
