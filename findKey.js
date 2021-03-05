const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length){
    return false;
  }else{
    for(let i = 0; i < array1.length; i++){
      if (array1[i] !== array2[i]){
        return false;
      }
    }
  }
  return true;
}

const assertArraysEqual = function(a1, a2){
  const result = eqArrays(a1, a2);
  console.log(result);
}

const findKey = function (object, callback){
  for (key in object){
    const value = object[key];
    if (callback(value)){
    return key;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))

assertArraysEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "noma");