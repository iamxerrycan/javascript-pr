// hashing method         

// function findDuplicates(arr) {
//     const duplicates = [];
//     const numSet = new Set();
  
//     for (const num of arr) {
//       if (numSet.has(num)) {
//         duplicates.push(num);
//       } else {
//         numSet.add(num);
//       }
//     }
  
//     return duplicates;
//   }
  
//   let array = [1, 2, 3, 2, 4, 5, 5];
//   const duplicateNumbers = findDuplicates(array);
//   console.log("Duplicate Numbers:", duplicateNumbers);
  

//using shorting& camparing 

// function findDuplicates(arr) {
//     const sortedArr = arr.slice().sort();
//     const duplicates = [];
  
//     for (let i = 0; i < sortedArr.length - 1; i++) {
//       if (sortedArr[i] === sortedArr[i + 1]) {
//         duplicates.push(sortedArr[i]);
//       }
//     }
  
//     return duplicates;
//   }
  
//   let array = [1, 2, 3, 2, 4, 5, 5];
//   const duplicateNumbers = findDuplicates(array);
//   console.log("Duplicate Numbers:", duplicateNumbers);
  

// first sort usingg bubble sort 

// function bubbleSort(arr) {
//     const n = arr.length;
//     let swapped;
  
//     do {
//       swapped = false;
//       for (let i = 0; i < n - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//           // Swap the elements if they are in the wrong order
//           const temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//           swapped = true;
//         }
//       }
//     } while (swapped);
  
//     return arr;
//   }
  
//   function findDuplicates(arr) {
//     const sortedArr = bubbleSort([...arr]);
//     const duplicates = [];
  
//     for (let i = 0; i < sortedArr.length - 1; i++) {
//       if (sortedArr[i] === sortedArr[i + 1]) {
//         duplicates.push(sortedArr[i]);
//       }
//     }
  
//     return duplicates;
//   }
  
//   let array = [1, 2, 3, 2, 4, 5, 5];
//   const duplicateNumbers = findDuplicates(array);
//   console.log("Duplicate Numbers:", duplicateNumbers);
  

//using quicksort =================

// function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     const pivot = arr[0];
//     const left = [];
//     const right = [];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
  
//     return [...quickSort(left), pivot, ...quickSort(right)];
//   }
  
//   function findDuplicates(arr) {
//     const sortedArr = quickSort([...arr]);
//     const duplicates = [];
  
//     for (let i = 0; i < sortedArr.length - 1; i++) {
//       if (sortedArr[i] === sortedArr[i + 1]) {
//         duplicates.push(sortedArr[i]);
//       }
//     }
  
//     return duplicates;
//   }
  
//   let array = [1, 2, 3, 2, 4, 5, 5];
//   const duplicateNumbers = findDuplicates(array);
//   console.log("Duplicate Numbers:", duplicateNumbers);
  

//merge sort   ============================

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function findDuplicates(arr) {
    const sortedArr = mergeSort([...arr]);
    const duplicates = [];
  
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i] === sortedArr[i + 1]) {
        duplicates.push(sortedArr[i]);
      }
    }
  
    return duplicates;
  }
  
  let array = [1, 2, 3, 2, 4, 5, 5];
  const duplicateNumbers = findDuplicates(array);
  console.log("Duplicate Numbers:", duplicateNumbers);
  