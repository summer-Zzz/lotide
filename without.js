const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length){
    return false;
  }else{
    for(i = 0; i < array1.length; i++){
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

const without = function(source, itemsToRemove){
    for (let i = 0; i < source.length; i++){
      for (let j = 0; j < source.length; j++){
      if (source[i] === itemsToRemove[j]){
        source.splice(i, 1);
      }
    }
  }
    return source;
};



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);