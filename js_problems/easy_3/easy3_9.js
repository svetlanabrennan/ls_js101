function cleanUp(string) {
  string = string.replace(/[^a-z]/gi, " ");
  string = string.replace(/\s+/gi, " ");
  return string;
}

console.log(cleanUp("---what's my +*& line?"));