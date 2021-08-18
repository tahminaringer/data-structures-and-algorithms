
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

Const maxSubArray = function(nums) {
  let max = nums[0];

  for(let i =0; i < nums.length; i++){
    if (nums[i-1] > 0) nums[i] += nums[i -1];
    max = Math.max(nums[i], max);
  }
  return max;
}
maxSubArray();
