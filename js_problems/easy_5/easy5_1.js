/* 

PROBLEM
  take a floating number >> representing an angle between 0 to 360 degress
  return a string >> representing that angle in degrees, minutes and seconds

  use degree symbol for degress
  use single quote for minutes
  use double quote for seconds

  there are 60 mins in degree, 60 seconds in min 

EXAMPLE
  dms(76.73);        // 76°43'48"

INPUT: floating number

OUTPUT: string

ALGO
  create an empty string 
  convert number to string
  split string into array
  forEach over array
    add element 1 + degree symbol to empty string
    add element 2 * 60 + single quote to string
    add element 3 + * 60 double quote to string
  return string
*/

const DEGREE = '\xB0'
const MIN_DEGREE = 60;
const MIN_SEC = 60;
const SEC_DEGREE = MIN_DEGREE * MIN_SEC;

function dms(number) {
  let degree = Math.floor(number)
  let min = Math.floor((number - degree) * MIN_DEGREE);
  let sec = Math.floor((number - degree - (min / MIN_DEGREE)) * SEC_DEGREE);

  return String(degree) + DEGREE + padZeroes(min) + "'" + padZeroes(sec) + '"';
}

function padZeroes(number) {
  var numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));   

