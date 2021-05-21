// Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.

function longestCommonPrefix(strs) {
  if(strs === null || strs === 0) return "";
  for(let i = 0; i < strs[0].length; i++) {
    let char = strs[0].charAt(i);
    for(let j = 1; j < strs.length; j++) {
      if(i === strs[j] || strs[j].charAt(i) !== char) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}

longestCommonPrefix();
