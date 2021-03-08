
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
const test = middle([1, 2, 3, 4, 5, 6]);
console.log('test--->', middle([1, 2, 3, 4, 5, 6]));
console.log(typeof(middle([1, 2, 3, 4, 5, 6])));
console.log(typeof(middle([1, 2, 3, 4, 5, 6])));



assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);