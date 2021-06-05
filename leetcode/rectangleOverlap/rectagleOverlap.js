// check to see if  rec1 x2 > rec2 x1 && rec1 x1 < rec2 x1
// or rec2 x2 > rec1 x1
// return true
// check to see if rec1 y2,> rec2 y1 && rec1 y1 < rec2 y1
// or rec2 y2 > rec1 y1
// check to see if rec1 x2 <= rec2 x1 || rec1 y2 <= rex2 y1
// check to see if  rec1 x1 >= rec2 x2 || rec1 y1 >= rex2 y2
// if so return true
// otherwise return false

var isRectangleOverlap = function(rec1, rec2) {
  if (!rec1 || !rec2 || rec1.length === 0 || rec2.lenght === 0) {
    return false;
  }

  if (((rec1[2] > rec2[0]) && (rec1[0] < rec2[0]) || (rec2[3] > rec1[0])) ||
    ((rec1[3] > rec2[1]) && (rec1[1] < rec2[1]) || rec2[3] > rec1[1]) ||
    ((rec1[3] <= rec2[0]) || (rec1[3] <= rec2[1])) ||
    ((rec1[0] >= rec2[2]) || (rec1[1] >= rec2[3]))) {
    return true;
  }
  return false;
};

isRectangleOverlap();

var isRectangleOverlap = function(rec1, rec2) {
  if (rec1[0] === rec1[2] ||
    rec1[1] === rec1[3] ||
    rec2[0] === rec2[2] ||
    rec2[1] === rec2[3] ||
    rec1[2] <= rec2[0] ||
    rec1[0] >= rec2[2] ||
    rec1[3] <= rec2[1] ||
    rec1[1] >= rec2[3] ) {
    return false;
  }
  return true;
};
