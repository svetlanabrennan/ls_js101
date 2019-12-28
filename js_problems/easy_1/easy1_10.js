/*

PROBLEM
sum of all numbers btw 1 & input num (inclusive) that are multiplies of 3 or 5. 

EXAMPLE
 if the supplied number is 20, the result should be 98 
 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

INPUT: integer

OUTPUT: integer
*/

function multiples(num, divisor) {
  return num % divisor === 0;
}

function multisum(num) {
  let total = 0;

  for (let count = 1; count <= num; count += 1) {
    if (multiples(count, 3) || multiples(count, 5)) {
      total += count
    }
  }
  console.log(total);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168