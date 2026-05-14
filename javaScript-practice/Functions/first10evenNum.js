//  Write a function that uses a `for` loop to print the first 10 even numbers.


function first10even(){
  for(let i=1; i<=20; i++){
    if(i%2 ===0){
      console.log(i);
    }
  }
}
first10even();