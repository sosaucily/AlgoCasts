// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution 1:
function maxChar(str: string): string {
  const hash = {};
  let biggestChar = "";
  let biggestVal = 0;

  for (let x of str) {
    hash[x] = hash[x] + 1 || 1;

    if (hash[x] > biggestVal) {
      biggestChar = x;
      biggestVal = hash[x];
    }
  }
  return biggestChar;
}

export default maxChar;
