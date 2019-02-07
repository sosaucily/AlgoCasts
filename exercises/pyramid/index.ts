// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//Solution 1
// function pyramid(n: number) {
//   for (let i = 1; i <= n; i++) {
//     console.log(
//       " ".repeat(n - i) + "#".repeat((i - 1) * 2 + 1) + " ".repeat(n - i)
//     );
//   }
// }

// Solutoin 2: recursion
function pyramid(n: number, iter: number = 0) {
  if (n === 0) return;

  pyramid(n - 1, iter + 1);

  console.log(
    " ".repeat(iter) + "#".repeat((n - 1) * 2 + 1) + " ".repeat(iter)
  );
}

export default pyramid;
