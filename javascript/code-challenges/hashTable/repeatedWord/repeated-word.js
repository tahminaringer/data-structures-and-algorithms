require hash-map



function repeatWord(string)



let hashTable <-- new HashTable(50)

let characterFreeString <-- string.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,'').toLowerCase;

 for( i < characterFreeString.length) loops over string

  let newWord <--  ''

  if ( string[i] === ' ')

   if (HashTable.contains(newWord)

   Return newWord

   else Hash Table. set(newWord, '')

newWord += characterFreeString[i]

module.exports = repeatWord;