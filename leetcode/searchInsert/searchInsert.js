var searchInsert = function (nums, target) {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  if (nums.length === 1)  // error checking
    if (target <= nums[0])   // error checking
      return 0;
    else {
      return 1;
    }

  if (target === nums[0]) { // error checking
    return 0;
  }

  while (leftIdx <= rightIdx) {

    let mid = Math.floor((leftIdx + rightIdx) / 2);
    if (target === nums[mid]) {

      return mid;

    }
    if (target < nums[mid]) {
      rightIdx = mid - 1;
    } else {
      leftIdx = mid + 1;
    }

  }
  return target > nums[leftIdx] ? leftIdx + 1 : leftIdx;
};
