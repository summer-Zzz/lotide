const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const array = string.split('');
  const result = {};
  for (let letters of array) {
    if (letters !== " ") {
      if (result[letters] === undefined) {
        result[letters] = 1;
      } else {
        result[letters]++;
      }
    }
  }
  return result;
};

