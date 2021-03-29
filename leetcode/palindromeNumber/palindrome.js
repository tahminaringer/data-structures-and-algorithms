function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  if (x % 10 === 0) {
    return false;
  }
  const reverseInt = Number(x.toString().split('').reverse().join(''));
  if (reverseInt === x) {
    return true;
  }
  return false;
}

isPalindrome();
