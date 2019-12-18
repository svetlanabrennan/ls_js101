function factors(number) {
  let divisor = number;
  let factors = [];

  while (number % divisor === 0) {
    factors.push(number / divisor);
  }
  divisor -= 1;
}