# Merge Sort

Merge sort uses a method of dividing a list of elements to sort them and repeat until each item of the list is fully sorted.

First you start by declaring a variable of in our case `n` and set it equal to the length of the array. Next you check to make sure array has more than one item in it. If it does, set a variable `mid` equal to Math.floor passed `n` divided by 2. Next we want to spit the array into two arrays and repeat until there is only two items to compare in each array.

1. [8,4,23,42,16,15]
2. [8, 4, 23] [42, 16, 15]
3. [8, 4] [23, 42] [16, 15]

## Code

```js
function mergesort(arr){
  let n = arr.length;
  if(n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    mergesort(left);
    mergesort(right);
    merge(left, right, [8,4,23,42,16,15]);
  }
}
```

Now we will compare values and sort the array in order. Iterate through each array value and split until a single value. Next compare values to the value next to it and order and push into. Next compare the index[0] of two separate arrays and the index[1] of the same arrays with one another. continue this process til you merge the arrays back to one.

1. [8] [4] [23] [42] [16] [15]
2. [4, 8] [23, 42] [15, 16]
3. [4, 8, 15, 16, 23, 42]

```js
function mergesort(arr){
  let n = arr.length;
  if(n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    mergesort(left);
    mergesort(right);
    merge(left, right, [8,4,23,42,16,15]);
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k +1;
  }
  if (i === left.length) {
    right[j].push(arr[k]);
  }else {
    left[i].push(arr[k]);
  }
}
```
