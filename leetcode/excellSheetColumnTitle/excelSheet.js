var convertToTitle = function (columnNumber) {

  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let result = '';

  while (columnNumber / 26 > 0) {
    let remainder = columnNumber % 26;
    columnNumber = Math.floor(columnNumber / 26);

    if (remainder > 0) {
      result = alpha[remainder] + result;
    } else {
      result = 'Z' + result;
    }
    columnNumber = Math.ceil(columnNumber / 26) - 1;
  }
  return result;
};
