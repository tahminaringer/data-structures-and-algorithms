function Mergesort(arr){
  let n = arr.length;
  if(n > 1) {
    let mid = n/2;
    let left = arr.splice(0, arr.indexOf('mid'));
    let right = arr.splice(mid, arr.indexOf('n'));
    Mergesort(left);
    Mergesort(right);
    Merge(left, right, arr);
  }
}

Merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k +1;
  } 
  if (i === left.length) {
    right.push(arr);
  }else {
    left.push(arr);
  }
}