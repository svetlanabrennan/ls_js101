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

function afterMidnight(string) {
  let array = string.split(":");
  let min = ((array[0] * MIN_HR) + Number(array[1])) % MIN_DAY;
  return min;
}

function beforeMidnight(string) {
  let min = MIN_DAY - afterMidnight(string);
  if (min === MIN_DAY) {
    min = 0;
  }
  return min;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);