// https://leetcode.com/problems/verifying-an-alien-dictionary/submissions/

Const isAlienSorted = function(words, order) {
  let map = new Map();
  for(let i = 0; i < order.length; i ++) {
    map.set(order[i], i);
  }
  for ( let i = 0; i < words.length; i ++) {
    let minLength = Math.min(words[i].length, words[i +1].length);
    for (let j = 0; j < minLength; j ++) {
        if((words[i][j] !== words[i + 1][j] && map.get(words[i][j])) > map.get(words[i + 1][j]) ||
          (words[i][j] === words[i +1][j] && j === minLength -1 && words[i].length > words[i + 1].length)) {
            return false;
          }
        else if (words[i][j] !== words[i + 1][j]) {
        break;
        }
    }
  }
  return true;
}