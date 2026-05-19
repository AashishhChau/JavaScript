//  Write a code to remove duplicate elements from the array `[1, 2, 2, 3, 4, 4, 5]` and print the new array.
let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];

for(let num of arr){
    if(!uniqueArr.includes(num)){
        uniqueArr.push(num);
    }
}
console.log(uniqueArr);