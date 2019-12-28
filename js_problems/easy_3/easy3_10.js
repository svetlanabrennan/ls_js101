function century(year) {
  let yearString = year.toString();
  let lastTwo = (yearString.slice(yearString.length - 2))
  let firstTwo = (yearString.slice(0, yearString.length -2))
  let centString = (Number(firstTwo) + 1).toString();
  let centYear = Number(firstTwo) + 1

  if (year <= 100) {
    console.log("1st");
  } else if (lastTwo === "00") {
    console.log(`${firstTwo}${findEnding(lastTwo[lastTwo.length - 1])}`)
  } else {
      if (isEleventoThirteenth(centYear)) {
        console.log(`${centYear}th`)
      } else {
      console.log(`${centYear}${findEnding(centString[centString.length - 1])}`);
    }
  }
}

function isEleventoThirteenth(num) {
  string = num.toString();
  string = string.slice(0, 2)
  return ((string === "11") || (string === "12") || (string === "13"))
}

function findEnding(string) {
  switch (string) {
    case "1": return "st"
    case "2": return "nd"
    case "3": return "rd"
    default: return "th"
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"