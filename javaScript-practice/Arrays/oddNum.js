//  Write a code to find and print all odd numbers from the array `[10, 15, 20, 25, 30]`.

let arr = [10, 15, 20, 25, 30];

for(let num of arr){
    if(num%2 !==0){
        console.log(num);
    }
}