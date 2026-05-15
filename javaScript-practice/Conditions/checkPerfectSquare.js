// Check Square Number: Write an `if-else` statement to check if a number is a perfect square. Print 
// "Perfect square" if true, otherwise "Not a perfect square."

let num = 15;
let root = Math.sqrt(num);
if (root%1 === 0){
  console.log("Perfect square");
}else{
  console.log("Not a perfect square");
}