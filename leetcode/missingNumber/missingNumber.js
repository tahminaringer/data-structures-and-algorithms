// https://leetcode.com/problems/missing-number/

const missingNumber = function(nums) {
  let missNum = nums.length;
  for (let i = 0; i < nums.length; i++) {
    missNum ^= i ^ nums[i];
  }
  return missNum;
};
missingNumber();
