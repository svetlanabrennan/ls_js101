/*
  PROBLEM 
    odd multiples of 7
    digits occuring once

    input: integer
    output: integer

  ALGO


*/

function featured(num) {
  const MAX = 9876543201;
  let int = 0;
  while (true) {
    int += 7
    if (int > MAX) {
      return console.log("Error. There is no next featured number");
      //break;
    }

    if ((int > num) && (int % 2 === 1) && (uniqDigits(int))) {
      break;
    }
  }
  console.log(int);
}

function uniqDigits(num) {
  let stringNum = String(num).split("");
  let seen = {};

  for (let i = 0; i < stringNum.length; i += 1) {
    if (seen[stringNum[i]]) {
      return false;
    }

    seen[stringNum[i]] = true;
  }
  return true;
}


featured(12);
featured(20);           // 21
featured(21);  
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(9876543200);   // 9876543201
featured(9876543201);  