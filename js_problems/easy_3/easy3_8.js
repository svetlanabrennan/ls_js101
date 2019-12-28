function getGrade(num1, num2, num3) {
  let total = (num1 + num2 + num3) / 3;

  if (total >= 90 && total <= 100) {
    return "A";
  } else if (total >= 80 && total < 90) {
    return "B";
  } else if (total >= 70 && total < 80) {
    return "C";
  } else if (total >= 60 && total < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
