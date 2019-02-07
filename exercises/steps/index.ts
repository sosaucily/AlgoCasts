// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//Solution 1:
// function steps(n: number): void {
//   let outline: string = "";

//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//       outline = outline.concat("#");
//     }
//     for (let j = 0; j < n - i; j++) {
//       outline = outline.concat(" ");
//     }
//     console.log(outline);
//     outline = "";
//   }
// }

//Solution 2
// function steps(n: number): void {
//   for (let i = 1; i <= n; i++) {
//     console.log("#".repeat(i).concat(" ".repeat(n - i)));
//   }
// }

//Solution 3: Recursion
function steps(n: number, iter: number = 0): void {
  if (n === 0) return;

  steps(n - 1, iter + 1);
  console.log("#".repeat(n).concat(" ".repeat(iter)));
}
export default steps;
