function logInBox(string) {
  let length = string.length;
  let horizontal = `+${"_".repeat(length + 2)}+`;
  let empty = `|${" ".repeat(length + 2)}|`;

  console.log(horizontal);
  console.log(empty);
  console.log(`| ${string} |`);
  console.log(empty);
  console.log(horizontal);
}

logInBox('To boldly go where no one has gone before.');
