'use strict';

require('../hash-table');
const repeatWord = require('./repeated-word');

const test1 = 'Once upon a time, there was a brave princess who...';
const test2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
const test3 = ';It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

describe('Hash Table', () => {
  it('it should return a word repeated in a string', () => {
    let result1 = repeatWord(test1);
    let result2 = repeatWord(test2);
    let result3 = repeatWord(test3);
    expect(result1).toEqual('a');
    expect(result2).toEqual('it');
    expect(result3).toEqual('summer');
  });
});
