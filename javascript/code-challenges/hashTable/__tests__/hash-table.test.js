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
  it('it should add a key and value to the hash map', () => {
    let newMap = new HashMap(3);
    newMap.set('dog', 'soup');
    newMap.set('unicorn', 'stew');
    newMap.set('possum', 'pie');
    newMap.set('turtle', 'tacos');
    newMap.set('narwal', 'noodles');
    expect(newMap.contains('turtle')).toBe(true);
    expect(newMap.contains('turkey')).toBe(false);
  });
});
