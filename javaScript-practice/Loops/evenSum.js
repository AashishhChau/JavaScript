// Sum of First 10 Even Numbers: Write a loop to calculate the sum of the first 10 even numbers (2, 4, 6,..., 20).


let evenSum = 0;
for(let i=1; i <= 20; i++){
    if(i%2 ===0){
        evenSum +=i;
    }
}console.log(evenSum);