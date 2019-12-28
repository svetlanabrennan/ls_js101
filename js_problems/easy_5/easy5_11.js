const MIN_HR = 60;
const HR_DAY = 24;
const MIN_DAY = MIN_HR * HR_DAY;

function timeOfDay(startMin) {
  if (startMin < 0) {
    startMin = (startMin % MIN_DAY) + MIN_DAY;
  } else {
    startMin = startMin % MIN_DAY
  }

  let hours = Math.floor(startMin / MIN_HR)
  let minutes = startMin % MIN_HR

  return formatTime(hours, minutes);
}

function leadingZeros(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hour, min) {
  return `${leadingZeros(hour)}:${leadingZeros(min)}`
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");