function catAge(num) {
  switch (num) {
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (num - 2) * 4;
  }
}

catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32