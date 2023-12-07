// sort an array
// const arr1 = [88,2, 5, 8, 93, 4];

// const sortedarr = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] < arr[j + 1]) {
//         let sorted = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = sorted;
//       }
//     }
//   }
//   return arr;
// };
// console.log(sortedarr(arr1));

// Beginner Level:===============================================================

// Find the maximum number in an array.
// console.log("hwllo");
// const arr = [1,2,3,6,3,6]
// const findmaxinarr=(arr)=>{
//   if (arr.length === 0) {
//     return "Array is empty";
//   }
//   let max = [0]
//   for(let i=0 ; i< arr.length ;i++){
//     if(arr[i]>max){
//       max = arr[i]
//     }
//   }
//   return max;
// }
// console.log(findmaxinarr(arr));

// const numbers = [10, 4, 8, 15, 2, 9];
// const maxNumber = Math.max(...numbers);

// console.log("The maximum number in the array is:", maxNumber)

// Calculate the sum of all elements in an array.===================================

// const sumofarray=(arr)=>{
//   let sum = 0;
//   for(let i=0; i<arr.length; i++){
//     sum += arr[i]
//   }
//   return sum;
// }

// console.log(sumofarray([1,4,6,7]));

// const sumofarray = (arr) => {
//   if (arr.length === 0) {
//     console.log("array is empty");
//     return 0;
//   }
//   let sum = arr.reduce((acc, val) => {
//     return acc + val;
//   }, 0);
//   return sum;
// };

// console.log(sumofarray([1, 2, 3, 4]));

// Reverse an array.===========================================================

// const reversarray = (arr) => {
//if (arr.length === 0) {
//     console.log("array is empty");
//     return 0;
//   }
//   let revarry = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     revarry.push(arr[i]);
//   }
//   return revarry;
// };
// console.log(reversarray([1, 2, 3, 4]));

// function revarr(arr) {
//   if (arr.length === 0) {
//     return [];
//   }
//   let rev = arr.reduce((acc, val) => [val, ...acc], []);
//   return rev;
// }

// console.log(revarr([2, 3, 4, 5]));

// Check if an array is sorted in ascending order.=============================================

// const checkarr = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true
// };

// console.log(checkarr([1, 2, 3, 4]));
// console.log(checkarr([1, 2, 3, 6, 4]));

// Merge two sorted arrays into a single sorted array.=========================================
// const mergesortedarr = (arr1, arr2) => {
//     let mergedarr = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//         mergedarr.push(arr1[i]);
//         i++;
//       } else {
//         mergedarr.push(arr2[j]);
//         j++;
//       }
//     }
  
//     while (i < arr1.length) {
//       mergedarr.push(arr1[i]);
//       i++;
//     }
  
//     while (j < arr2.length) {
//       mergedarr.push(arr2[j]);
//       j++;
//     }
//     return mergedarr;
//   };
//   let ar1 = [1, 2, 3, 4, 5];
//   let ar2 = [5, 6, 7, 8, 9, 11, 44];
//   console.log(mergesortedarr(ar1, ar2));

// Find the second largest number in an array.========================================
// const find2ndlargest = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if(arr[j]>arr[j+1]){
//         let sorted = arr[j]
//         arr[j]=arr[j+1]
//         arr[j+1] = sorted;
//       }
//     }
//   }
//   return arr[arr.length -2];
// };

// console.log(find2ndlargest([1, 2, 4, 67,5,30, 70]));


// Remove duplicates from an array. ==================================================
// const removedubl=(arr)=>{
//   let uniquearr = [];
//   for(let i=0 ;i <arr.length ; i++){
//     if(!uniquearr.includes(arr[i])){
//       uniquearr.push(arr[i])
//     }
//   }
//   return uniquearr;
// }

// let res = removedubl([1,2,3,3,4,4,4,5,6,6])
// console.log(res);

