1
exports.min = function min (array) {
  if (array === undefined || array == !-Infinity) {
  return 0;
}
else {
  return Math.min(...array);
}
}

exports.max = function max (array) {
  if (array === undefined || array == !-Infinity) {
    return 0;
  }
  else if (array != undefined) {
  return Math.max(...array);
  }
}

exports.avg = function avg (array) {
  if (array === undefined || array == !-Infinity) {
    return 0;
  }
  else {
    return array.reduce((a, b) => (a + b)) / array.length;;
  }
}


/*
You should implement 3 functions: max, min, and avg for searching minimal value, maximal value, and an average value of a given array.

For example:

min(1, 2, 3, 4) // returns 1;
max(1, 2, 3, 4) // returns 4;
avg(1, 2, 3, 4) // returns 2.5;
Please note, that you should return 0 if no params specified or an empty array passed 
*/