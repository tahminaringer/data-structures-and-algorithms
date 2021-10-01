var lengthOfLastWord = function (s) {
  let string = s.length - 1;
  while (string >= 0 && s.charAt(string) === ' ') {
    string--;
  }
  let length = 0;
  while (string >= 0 && s.charAt(string) !== ' ') {
    string--;
    length++;
  }
  return length;

};

lengthOfLastWord();
