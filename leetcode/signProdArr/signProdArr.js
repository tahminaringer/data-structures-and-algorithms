var arraySign = function (nums) {
  let negCounter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0;
    }
    if (nums[i] < 0) {
      negCounter++;
    }
  }
  if (negCounter % 2 === 0) {
    return 1;
  } else {
    return -1;
  }
};

arraySign();
