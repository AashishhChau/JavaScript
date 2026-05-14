//  Write a function that uses a `for` loop to calculate and return the sum of all even numbers between 1 and 50.


function sumOfEvenNum(){
    let sum=0;
    for(let i=1; i<=50; i++){
        if(i%2 ===0){
            sum += i;
        }
    }return sum;
}
console.log(sumOfEvenNum());