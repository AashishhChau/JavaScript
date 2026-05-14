// Write a function that uses a `for` loop to calculate and return the sum of the squares of the first `n` natural numbers. 

function square(n){
  let sum=0;
  for(let i=1; i<=n; i++){
    sum += i*i;
  }
  return sum;
}
console.log(square(10));