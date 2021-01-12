'use strict';

function insertionSort(intArr) {
  for(let i = 1; i < intArr.length; i++){
    let j = i - 1;
    let temp = intArr[i];
    while ((j >= 0) && (temp < intArr[j])) {
      intArr[j +1] = intArr[j];
      j = j -1;
    }
    intArr[j + 1] = temp;
  }
  return intArr;
}

module.exports = insertionSort;
