// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str: string): string {
  const words = str.split(" ");
  const capWords: Array<string> = [];
  for (let word of words) {
    capWords.push(word[0].toUpperCase().concat(word.slice(1)));
  }

  return capWords.join(" ");
}

export default capitalize;
