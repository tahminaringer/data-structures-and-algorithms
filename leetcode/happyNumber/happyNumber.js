function isHappyNum(n) {

  let num = n;
  let seenNum = [];

  while(num !== 1) {
    const nums = num.toString().split('');
    num = 0;
    nums.forEach(element => {
      num += Number(element) ** 2;
    });
    if (history.includes(num)) {
      return false;
    }
    seenNum.pushState(num);
  }
  return true;
};

isHappyNum();