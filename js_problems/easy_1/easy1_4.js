/*

PROBLEM: enter length and width of room in meters
returns the area of the room in square meters and square feet

INPUT: two strings

OUTPUT: two integers

*/

let readline = require('readline-sync');
const SQR_FEET = 10.7639;

let lengthMeters = readline.question("Enter the room length in meters: ");
let widthMeters = readline.question("Enter the room width in meters: ");
lengthMeters = Number(lengthMeters);
widthMeters = Number(widthMeters);

function areaRoom(length, width) {
  return length * width;
}

let areaInMeters = areaRoom(lengthMeters, widthMeters).toFixed(2);
let areaInFeet = (areaInMeters * SQR_FEET).toFixed(2);

console.log(`The area of the room is ${areaInMeters} (${areaInFeet} square feet).`);

//----------------

let readline = require('readline-sync'); // further explorations
const SQR_FEET = 10.7639;

let metersOrFeet = readline.question("Press 1 to input in meters or 2 to input in feet: ");
let length = readline.question("Enter the room length: ");
let width = readline.question("Enter the room width: ");
length = Number(length);
widge = Number(length);

function calcArea(inputType, length, width) {
  if (inputType === "1") {
    return (`${(length * width).toFixed(2)} square meters`);
  } else {
    return (`${((length * width) * SQR_FEET).toFixed(2)} square feet`);
  }
}

let area = calcArea(metersOrFeet, length, width);

console.log(`The area of the room is ${area}`);