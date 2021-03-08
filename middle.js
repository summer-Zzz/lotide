
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

module.exports = middle;
