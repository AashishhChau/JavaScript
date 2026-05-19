//  Write a code to find and print the minimum value in the array `[12, 4, 6, 9, 1]`.


let arr = [12, 4, 6, 9, 1];
let min = arr[0]


for(let num of arr){
    if(num < min){
        min = num;
    }
}
console.log(min);