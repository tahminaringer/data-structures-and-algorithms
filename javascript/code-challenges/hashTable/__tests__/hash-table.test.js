'use strict';

let HashMap = require('../hash-table');

describe('Hash Map', () => {
  it('it should add a key and value to the hash map', () => {
    let newMap = new HashMap(3);
    newMap.set('dog', 'soup');
    newMap.set('unicorn', 'stew');
    newMap.set('possum', 'pie');
    newMap.set('turtle', 'tacos');
    newMap.set('narwal', 'noodles');
    expect(newMap.get('dog')).toEqual('soup');
  });
  it('it should take in a key and return a boolean if key exists in table', () => {
    let newMap = new HashMap(3);
    newMap.set('dog', 'soup');
    newMap.set('unicorn', 'stew');
    newMap.set('possum', 'pie');
    newMap.set('turtle', 'tacos');
    newMap.set('narwal', 'noodles');
    newMap.set('cat', 'cake');
    newMap.set('ladybug', 'wings');
    newMap.set('hamster', 'toes');
    expect(newMap.contains('turtle')).toBe(true);
    expect(newMap.contains('dog')).toBe(true);
    expect(newMap.contains('unicorn')).toBe(true);
    expect(newMap.contains('narwal')).toBe(true);
    expect(newMap.contains('cat')).toBe(true);
    expect(newMap.contains('ladybug')).toBe(true);
    expect(newMap.contains('hamster')).toBe(true);
    expect(newMap.contains('turkey')).toBe(false);
  });
});
