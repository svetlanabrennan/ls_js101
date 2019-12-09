let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// this causes an infinite loop because the while loop sets counter to equal 1
// which makes it a truthy value and the loop never becomes false. 