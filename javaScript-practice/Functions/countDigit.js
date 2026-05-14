// Write a function that uses a `for` loop to count and return the number of digits in a given positive integer. 

function countDigit(num){
  let count = 0;
  for(let i=num; i>0; i=Math.floor(i/10)){
    count++;
  }
  return count;
}
console.log(countDigit(123456));
console.log(countDigit(11));