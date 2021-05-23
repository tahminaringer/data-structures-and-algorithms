// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

// var isValid = function(s) {
//   // create a stack
//   let stack = [];
//   // loop through each element in the string
//   for(let i=0; i < s.length; i++) {
//     let character = stack[stack.length -1];
//     // If there is there is a staring bracket, push it into the stack
//     if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
//       stack.push(s[i]);
//       //Pop the opening bracket off the stack
//       //if there is a matching closing bracket in the string
//     } else if((character === '(' && s[i] ===')') || 
//     (character === '{' && s[i] ==='}') ||
//     (character === '[' && s[i] ===']')) {
//       stack.pop();
//     } else {
//       return false;
//     }
//     return stack.length ? false : true;
//   }
// };

// isValid();



const isValid = function(s) {
  //create a stack
  const leftStack = [];
  //create a hash
  const legend = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  // loop through the string and if opening paren push into leftStack
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      leftStack.push(s[i]);
    //if there is a matching closing bracket pop off the stack
    } else if (legend[leftStack.pop()] !== s[i]) {
      return false;
    }
  }
  return leftStack.length ? 0 : 1;
};
isValid();
