//  Write a function that uses a `for` loop to calculate and return the sum of the first `n` natural numbers.

function sumOfNaturalNum(num){
    let sum = 0;
    for(let i=0; i<=num; i++){
        sum += i;
    }
    return sum;
}
console.log(sumOfNaturalNum(5));