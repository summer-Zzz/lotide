const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(a1, a2) {
  const result = eqArrays(a1, a2);
  console.log(result);
};


const letterPositions = function(sentence) {
  const result = {};
  const array = sentence.split('');
  for (let x = 0; x < array.length; x++) {
    const letters = array[x];
    if (letters !== " ") {
      if (result[letters] === undefined) {
        result[letters] = [];
      }
      result[letters].push(x);
    }
  }
  return result;
};



const input = 'lighthouse in the house';
console.log(letterPositions(input));

const expect =
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};