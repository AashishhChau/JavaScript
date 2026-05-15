// 32. Check Month: Write an `if-else` statement to check if a month number corresponds to a month with 31 days. Print "31 days" if true, otherwise "Not 31 days."

let month = 7;
if(
  month === 1 ||
  month === 2 ||
  month === 4 ||
  month === 6 ||
  month === 8 ||
  month === 10 ||
  month === 12 
  ){
    console.log("31 days");
  }else{
    console.log("Not 31 days");
  }