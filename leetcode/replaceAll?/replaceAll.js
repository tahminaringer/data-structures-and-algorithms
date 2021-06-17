var modifyString = function(s){
  const a = 'a';
  const b = 'b';
  const c = 'c';
  let prev;
  let next;

  const sArray = s.split(' ');

  for (let i = 0; i < sArray.length; i++) {
    if (sArray === '?'){
      prev = sArray[i-1];
      next = sArray[i+1];
    }
    if (prev && next !== a) {
      sArray[i] = a;
    }
    else if (prev && next !== b) {
      sArray[i] = b;
    } else {
      sArray[i] = c;
    }
  }
};

modifyString();
