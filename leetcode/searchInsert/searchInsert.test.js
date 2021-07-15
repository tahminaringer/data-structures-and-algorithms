'use strict';

let searchInsert = require('./searchInsert');

describe('Search Insert', () => {
  it('Test should return 0 if the target is less than index 0', () => {
    const numbers = [1, 3, 5, 6], target = 0;
    expect(searchInsert(numbers, target)).toStrictEqual(0);
  });
  it('Test if their is an item in array and if it equals target value', () => {
    const numbers = [5], target = 5;
    expect(searchInsert(numbers, target)).toStrictEqual(0);
  });
  it('Test to return index for target', () => {
    const numbers = [2, 4, 6, 7, 9, 10, 13, 16, 20, 22], target = 10;
    expect(searchInsert(numbers, target)).toStrictEqual(5);
  });
  it('Test if number is last in array', () => {
    const numbers = [2, 4, 6, 7, 9, 10, 13, 16, 20, 22], target = 22;
    expect(searchInsert(numbers, target)).toStrictEqual(9);
  });
  it('Test if no target value is in array return correct index', () => {
    const numbers = [2, 4, 6, 7, 9, 10, 13, 16, 20, 22], target = 8;
    expect(searchInsert(numbers, target)).toStrictEqual(4);
  });
});
