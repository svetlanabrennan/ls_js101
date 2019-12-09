function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// logs Product2", "Product3" and "Product not found" because there are
// no breaks after the case statement. It skips the first case statment 
// since it doesn't match the string but it doesn't skip the rest of 
// the case statements after the 2nd one because Javascript doesn't care 
// that it doesn't match after it already found a match. 