/*
Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript.
*/

function nextItem(xs, item) {
    // TODO: Implement me

    var found = false;
    for (const x of xs) {
        if (found) return x;
        found = x === item; // whether to be returned in the next iteration
    }
}
