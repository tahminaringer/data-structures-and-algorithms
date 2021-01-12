# Insertion Sort Blog

The insertion sort function is very similar to ordering a hand of cards. Each time you draw you place the card in the correct order in your hand.

first you want to create a function and pass it the array you want to sort

```js
function insertionSort(intAr){

}
```

Next you want to create a for loop that you iterate over each integer with in the array. We want to start at the second element because the first element is presorted. Set a variable of j equal to i minus 1. Set another variable we will call temp equal to your array at index[i]

```js
function insertionSort(intArr){
for(let i = 1; i < intArr.length; i++){
  let j = i - 1;
  let temp = intArr[i]
  }
}
```

Next create a while loop for when j is greater than or equal to 0 AND the *temp* variable is less than the array[j]. This sorts the elements to the right and opens up space for the sort element to be inserted. Once the correct spot is found this process is repeated for each iteration. Set the array[j + 1] equal to array[j] and set j equal to j - 1. Set arry[j +1] equal to temp. And lastly return your sorted array.

```js
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
```

So if we pass the function an arry and call the function. The input of the array would be as shown below.

```js
let intArr = [3, 9, 6, 30, 15, 12, 5, 20];

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
insertSort()
```

The out put of the array would be

```js
intArr = [3, 5, 6, 9, 12, 15, 20, 30]
```
