function sentencify(words) {
  // TODO: Write your solution here!
  return words.map((word, i) => i === 0 ? word[0].toUpperCase() + word.slice(1) : word).join(" ").concat(".");
}
