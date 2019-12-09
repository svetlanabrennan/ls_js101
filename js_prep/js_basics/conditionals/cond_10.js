let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// bonus question: you do need the parentheses because the expressions
// on either of the && operator will be executed first since the &&
// operator has a higher precedence than ||. 