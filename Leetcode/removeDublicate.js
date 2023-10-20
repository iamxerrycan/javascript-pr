function removeDublicate(arr) {
  const duplicates = [];
  for (const num of arr) {
    if (!duplicates.includes(num)) {
      duplicates.push(num);
    }
  }
  return duplicates;
}

let r = [1, 1, 2, 3, 3, 4, 4, 5, 5, 4];
let res = removeDublicate(r);
console.log(res);

// 2nd without using anylibrary

function removeDuplicates(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    let isDuplicate = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (currentElement === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArray.push(currentElement);
    }
  }

  return uniqueArray;
}

let array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log("Unique Array:", uniqueArray);
