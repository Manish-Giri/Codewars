// You were given a string of integer temperature values. Create a function lowest_temp(t) and return the lowest value or None/null/Nothing if the string is empty.

function lowestTemp(t) {
  return !t ? null: Math.min(...t.split(' ').map(temp => +temp)); //lowest temperature
}
