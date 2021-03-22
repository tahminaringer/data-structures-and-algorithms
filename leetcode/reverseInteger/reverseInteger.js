function reverseInteger(x) {
  const negInt = x < 0 ? true : false;

  if(negInt) {
    x = x *-1;
  }

  let rev = 0;
  while(x > 0) {
    rev = (rev * 10) + (x % 10);
    x = parseInt(x/10);
  }
  if (rev > 2**32) {
    return 0;
  }
  return negInt? rev * -1 : rev;
};

reverseInteger();