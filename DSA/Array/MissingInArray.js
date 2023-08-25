// 1.How do you find the missing number in a given integer array of 1 to 100?

//a. for single missing array ;

// function missingValArray(arr){
//     const n = arr.length + 1;
//    const acspectedSum = (n * (n+1)/2)
//    let actualSum = 0;
//    for (const num of arr){
//     actualSum += num;
//    }

//    const missingNum = acspectedSum - actualSum;
//    return missingNum
// }

// let array =[1, 2, 3, 4,6];
// const missingNum = missingValArray(array)
// console.log(missingNum);

//b . for multiple missing array

function findMissingNumbers(arr) {
  let maxNumber = 0;
  for (const num of arr) {
    if (num > maxNumber) {
      maxNumber = num;
    }
  }

  const missingNumbers = [];

  for (let i = 1; i <= maxNumber; i++) {
    if (!arr.includes(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

let array = [1, 2, 3, 4, 6];
const missingNumbers = findMissingNumbers(array);
console.log("Missing Numbers:", missingNumbers);
