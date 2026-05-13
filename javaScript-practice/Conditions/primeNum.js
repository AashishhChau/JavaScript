    // Prime Check: Write an `if-else` statement to check if a number is greater than 1 and divisible only by 
// 1 and itself. Print "Prime" if true, otherwise "Not prime." 

let num = 5;
let isPrime = true;
if(num <= 1){
    isPrime = false;
}else{
    for(let i = 2; i < num; i++){
        if(num%i === 0){
            isPrime = false;
            break;
        }
    }
}
if(isPrime){
    console.log("Prime Number");
}else{
    console.log("Not a prime number");
}