// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//Solution 1:
// function chunk(array: Array<number>, size: number): Array<Array<number>> {
//   const outputArray: Array<Array<number>> = [[array[0]]];
//   for (let i = 1; i < array.length; i++) {
//     if (i % size === 0) {
//       //start a new array
//       outputArray.push([array[i]]);
//     } else {
//       outputArray[outputArray.length - 1].push(array[i]);
//     }
//   }
//   return outputArray;
// }

// Solution 2:
function chunk(array: Array<number>, size: number): Array<Array<number>> {
  const outArray: Array<Array<number>> = [];
  outArray.push(array.slice(0, size));
  for (
    let i = 1;
    outArray[outArray.length - 1].length === size && array.length > i * size;
    i++
  ) {
    outArray.push(array.slice(i * size, i * size + size));
  }

  return outArray;
}

export default chunk;
