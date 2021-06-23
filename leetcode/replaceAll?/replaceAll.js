
//https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/


var modifyString = function (s) {

  let prev = '';
  let next = '';

  const sArray = s.split('');

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === '?') {
      if (i === 0) {
        next = sArray[i + 1];
      } else if (i === sArray.length - 1) {
        prev = sArray[i - 1];
        next = '';
      } else {
        prev = sArray[i - 1];
        next = sArray[i + 1];
      }
      if (prev !== 'a' && next !== 'a') {
        sArray[i] = 'a';
      }
      else if (prev !== 'b' && next !== 'b') {
        sArray[i] = 'b';
      } else {
        sArray[i] = 'c';
      }
    }
  }
  return sArray.join('');
};

modifyString();

