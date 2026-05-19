//  Write a code to find and print the maximum value in the array `[3, 5, 7, 2, 8]`.

let arr = [3, 5, 7, 2, 8];
let max = arr[0];

for(let num of arr){
    if(max < num){
        max = num;
    }
}
console.log(max);