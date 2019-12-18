function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let buff = [1, 2, 3, 4, 5];
let size = 5;
let element = 9;

console.log(addToRollingBuffer1(buff, size, element));
//console.log(addToRollingBuffer2(buff, size, element));
console.log(buff);

// push mutates the buffer array whereas concat doesn't mutate it and returns a new array