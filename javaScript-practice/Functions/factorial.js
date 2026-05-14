//  Write a function that uses a `for` loop to calculate and return the factorial of a given number `n`


function factorial(n){
    let fact = 1;
    for(let i=1; i<=n; i++){
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));