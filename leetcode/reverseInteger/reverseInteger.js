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

var reverse = function(x) {
  let revInt = 0;
  
  while (x !== 0) {
      let popInt = x % 10;
      x /= 10;
      if (revInt > parseInt.MAX_VALUE/10 || (revInt === parseInt.MAX_VALUE/10 && popInt > 7)) {
          return 0;
      }
      if (revInt > parseInt.MIN_VALUE/10 || (revInt === parseInt.MIN_VALUE/10 && popInt < -8)) {
          return 0;
      } 
      revInt = revInt * 10 + popInt;
  }
  return revInt;
};