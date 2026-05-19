//  Write a code to multiply all elements in the array `[2, 3, 4]` and print the result.

let array = [2, 3, 4];
let multiply = 1;

for(let num of array){
    multiply *= num;
}
console.log(multiply);