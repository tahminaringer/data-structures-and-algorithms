var convertToTitle = function(columnNumber) {
  
  let alphaMap = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H',
    8: 'I',
    9: 'J',
    10: 'K',
    11: 'L',
    12: 'M',
    13: 'N',
    14: 'O',
    15: 'P',
    16: 'Q',
    17: 'R',
    18: 'S',
    19: 'T',
    20: 'U',
    21: 'V',
    22: 'W',
    23: 'X',
    24: 'Y',
    25: 'Z'
  };

  let result = '';
  if (columnNumber <= 26) {
    return alphaMap[columnNumber%26];
  }

  while (columnNumber > 0) {
    let remainder = columnNumber % 26;
    columnNumber = Math.floor(columnNumber/26);

    if (remainder === 0) {
      columnNumber = columnNumber -1;
    }
    result = alphaMap[remainder] + result;
  }
  return result;
};
