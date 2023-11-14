function getArrayParams(...arr) {
  if(arr.length > 0){
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] < min){
        min = arr[i];
      }
      if(arr[i] > max){
        max = arr[i];
      }
      sum = arr[i] + sum;
    }
    avg = sum/arr.length;
    avg = Number(avg.toFixed(2));
    return { min: min, max: max, avg: avg };
  } else return 0;
}

function summElementsWorker(...arr) {
  if(arr.length > 0){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = arr[i] + sum;
    }
    return sum;
  } else return 0;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length > 0){
    let max = Math.max.apply(null,arr);
    let min = Math.min.apply(null,arr);
    let result = max - min;
    return result;
  } else return 0;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length > 0){
      let sumEvenElement = 0;
      let sumOddElement = 0;
      let result = 0;
      for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
          sumEvenElement = sumEvenElement + arr[i];
        }
        if(arr[i] % 2 != 0){
          sumOddElement = sumOddElement + arr[i];
        }
      }
      result = sumEvenElement - sumOddElement;
      return result;
  } else return 0;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length > 0){
    let sumEvenElement = 0;
    let countEvenElement = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 == 0){
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement = countEvenElement + 1;
      }
    }
    result = sumEvenElement / countEvenElement;
    result = Number(result.toFixed(2));
    return result;
  } else return 0;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let arraySecondLevel = new Array();
  let resultFunc;
  for(let i = 0; i < arrOfArr.length; i++){
      for(let j = 0; j < arrOfArr[i].length; j++){
          arraySecondLevel.push(arrOfArr[i][j]);
      }
      resultFunc = func(...arraySecondLevel);
      if(resultFunc > maxWorkerResult){
          maxWorkerResult = resultFunc;
      }
      arraySecondLevel.length = 0;
      
  }
  return(maxWorkerResult);
}