function twoSums(nums, target) {
  let newArr = [];

  for(let i = 0; i < nums.length; i ++) {
    for(let j = i + 1; i < nums.length; j ++) {
      if(nums[j] === target - nums[i]) {
        newArr.push(nums[j]);
        newArr.push(nums[i]);
        return newArr;
      }
    }
  }
  return null;
}

twoSums();
