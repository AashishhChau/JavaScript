//  Write a function that uses a `for` loop to print the first 10 numbers in the Fibonacci sequence

function fibonacciSequence(){
    let a =0, b=1;
    for(let i=1; i<=10; i++){
        console.log(a);
        let next = a+b;
        a=b;
        b=next;
    }
}
fibonacciSequence();