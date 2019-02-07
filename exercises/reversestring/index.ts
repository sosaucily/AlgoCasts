// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Solution 1:
// function reverse(str) {
//   const flippedString = Array();

//   str.split('').forEach(letter => flippedString.unshift(letter));

//   return flippedString.join('');
// }

//Solution 2:
// function reverse(str: String): String {
//   let flippedString: string = "";

//   for (let x = str.length; x > 0; x--) {
//     flippedString += (str[x-1]);
//   }

//   return flippedString;
// }

//Solutionm 3:
// function reverse(str: string): string {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

//Solution 4:
function reverse(str: string): string {
  let reversed = "";

  for (let c of str) {
    reversed = c + reversed;
  }

  return reversed;
}
export default reverse;
