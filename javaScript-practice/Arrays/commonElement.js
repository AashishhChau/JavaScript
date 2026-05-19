// Write a code to find and print the common elements between the arrays `[1, 2, 3]` and `[2, 3, 4]`. 

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

let commonArr = arr1.filter(num => arr2.includes(num));
console.log(commonArr);