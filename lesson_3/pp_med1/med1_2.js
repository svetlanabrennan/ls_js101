let munstersDescription = "The Munsters are creepy and spooky.";

function swapCase(string) { // my solution
  newString = "";
  for (let i = 0; i < string.length; i +=1) {
    if (string[i] === string[i].toLowerCase()) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}

munstersDescription.split("").map(function(char) { // course solution
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

console.log(swapCase(munstersDescription));