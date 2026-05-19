// Write a code to find and print all even numbers from the array `[1, 2, 3, 4, 5, 6, 7, 8, 9]`.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let num of array){
    if(num%2 === 0){
        console.log(num);
    }
}