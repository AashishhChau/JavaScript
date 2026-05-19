// Write a code to calculate and print the average of the numbers in the array `[10, 20, 30]`.

let array = [10, 20, 30]
let total = 0;

for(let num of array){
    total += num;
}
let average = total/array.length;
console.log(average);