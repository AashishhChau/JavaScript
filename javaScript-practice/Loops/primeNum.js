// Print the first 5 prime numbers: Write a loops to print the first 5 prime numbers.

let count = 0;
let num = 2;

while (count < 5) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
        count++;
    }

    num++;
}