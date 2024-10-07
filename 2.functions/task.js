function getArrayParams(...arr) {

    let min = Math.min (...arr);
    let max = Math.max (...arr);
    let sum = 0;
    for (let i = 0;i<arr.length;i++){
        sum+=arr[i];
    }
    let avg = Number((sum/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

    let sum = 0;
    for (let i = 0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

function differenceMaxMinWorker(...arr) {
    if (arr.length==0){
        return 0;
    }
    let min = Math.min (...arr);
    let max = Math.max (...arr);
    return max-min;
}

function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0;i<arr.length;i++){
        let n = arr[i];
        if (n%2==0){
        sumEvenElement+=n
        }
        else {
        sumOddElement+=n
        }
    }
    return sumEvenElement-sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length==0){
        return 0;
    }
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0;i<arr.length;i++){
        let n = arr[i];
        if (n%2==0){
        sumEvenElement+=n
        countEvenElement++
        }

    }
    return sumEvenElement/countEvenElement;
}

function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i = 0;i<arrOfArr.length;i++){
        const result = func(...arrOfArr[i]);
        if (result>maxWorkerResult){
            maxWorkerResult=result
        }
    }
    return maxWorkerResult;
}
