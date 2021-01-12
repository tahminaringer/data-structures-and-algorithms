'use strict';

const insertionSort = require('../insertion-sort');

describe('insertion-sort', () => {
  it('Can sort an arry by using insertion-sort method', () => {
    const intArr = [20, 18, 12, 8, 5, -2];
    expect(insertionSort(intArr)).toStrictEqual([-2, 5, 8, 12, 18, 20]);
  });
});

