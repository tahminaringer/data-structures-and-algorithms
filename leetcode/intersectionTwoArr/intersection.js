var intersection = function (nums1, nums2) {
  let outputArr = [];
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  set1.forEach(num => {
    if (set2.has(num)) {
      outputArr.push(num);
    }
  });
  return outputArr;
};

intersection();
