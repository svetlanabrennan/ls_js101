function calculateBMI(height, weight) {
  let heightMeters = height / 100
  let bmi = weight / heightMeters**2;
  return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80)); // 24.69