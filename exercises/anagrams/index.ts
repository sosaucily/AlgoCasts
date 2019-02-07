// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Solution 1:
// function anagrams(stringA: string, stringB: string): boolean {
//   const mod_a: string = stringA.replace(/[\W_]/g, "").toLowerCase();
//   const mod_b: string = stringB.replace(/[\W_]/g, "").toLowerCase();

//   const elements: Object = {};
//   const elements2: Object = {};
//   for (let char of mod_a) {
//     elements[char] = elements[char] + 1 || 1;
//   }

//   for (let char of mod_b) {
//     elements2[char] = elements2[char] + 1 || 1;
//   }

//   return compareObjs(elements, elements2);
// }

// function compareObjs(obj1: object, obj2: object): boolean {
//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) return false;
//   }

//   return Object.keys(obj1).length === Object.keys(obj2).length;
// }

//Solution 2:
function anagrams(stringA: string, stringB: string): boolean {
  const newStringA = stringA
    .replace(/[\W_]/g, "")
    .toLowerCase()
    .split("")
    .sort().join('');
  const newStringB = stringB
    .replace(/[\W_]/g, "")
    .toLowerCase()
    .split("")
    .sort().join('');

  return newStringA === newStringB;
}

export default anagrams;
