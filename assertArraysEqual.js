const eqArrays = require('./eqArrays');

const assertArraysEqual = function(a1, a2){
  const result = eqArrays(a1, a2);
  console.log(result);
}

module.exports = assertArraysEqual;