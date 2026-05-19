// Write a code to combine the arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combine = [...array1, ...array2];
console.log(combine);