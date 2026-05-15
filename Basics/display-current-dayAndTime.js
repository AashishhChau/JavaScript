// Write a JavaScript program to display the current day and time in the following format.  


const now = new Date();

//Days Array
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//get current day
const day = days[now.getDay()];
//Print day
console.log("Today is: " + day + ".");


// get hours, minutes and seconds
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

//convert to 12hours format
let session = "AM";

if(hours >= 12){
  session = "PM";
  if(hours > 12){
    hours = hours-12;
  }
}

if(hours === 0){
  hours = 12;
}



// Add leading zeros
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds <10 ? "0" + seconds : seconds;

console.log("Current time is: " +hours+ " " +session + ":" + minutes + ":" +seconds);


