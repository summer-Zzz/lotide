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

const middle = function (array){
  let middleIndex = (array.length - 1)/2;
  const middleOdd = []; // 1
  const middleEven = []; // 2
  if(array.length <= 2){
    return [];
    }else if (array.length % 2 !== 0){
      middleOdd.push(array[middleIndex]);
      return middleOdd;
    }else if (array.length % 2 === 0){
      middleEven.push(array.length/2, array.length/2 + 1);
      return middleEven;
    }
    console.log(middleOdd);
    console.log(middleEven);
  }

// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4]));
// const test = middle([1, 2, 3, 4, 5, 6]);
// console.log('test--->', middle([1, 2, 3, 4, 5, 6]));
// console.log(typeof(middle([1, 2, 3, 4, 5, 6])));
// console.log(typeof(middle([1, 2, 3, 4, 5, 6])));



// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2]), []);