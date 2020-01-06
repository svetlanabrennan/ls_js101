function swapName(string) {
  let array = string.split(" ");
  console.log(`${array[1]}, ${array[0]}`);
}

function swapName(string) {
 return string.split(" ").reverse().join(", ");
}

function swapName(string) { // further explorations
  let array = string.split(" ");
  let first = array[0];
  let last = array[array.length - 1];
  let middle = array.slice(1, array.length - 1);
  console.log(`${last}, ${first} ${middle.join(" ")}`);
}

swapName('Joe Roberts');
swapName('Karl Oskar Henriksson Ragvals');   