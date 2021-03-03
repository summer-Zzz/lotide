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
