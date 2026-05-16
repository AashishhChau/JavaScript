// Calculate Area of Triangle


//Declare the three sides of triangle
let side1 = 5;
let side2 = 6;
let side3 = 7;


//Calculate the semi-perimeter of triangle
let perimeter = (side1+side2+side3)/2;

//calculate area of triangele
let area = Math.sqrt(perimeter*(perimeter-side1)*(perimeter-side2)*(perimeter-side3));

console.log("Area of triangle", area)