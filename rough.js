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

// Beginner Level:

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

// console.log("The maximum number in the array is:", maxNumber); // Output: The maximum number in the array is: 15

// Calculate the sum of all elements in an array.

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

// Reverse an array.

const reversarray=(arr)=>{
  let sp = arr.splite("").reverse().join("")
  return sp
}
console.log(reversarray([1,2,3,4]));
// Check if an array is sorted in ascending order.
// Merge two sorted arrays into a single sorted array.
// Intermediate Level:

// Find the second largest number in an array.
// Remove duplicates from an array.
// Rotate an array to the right by a given number of steps.
// Implement a function to perform a linear search in an array.
// Find pairs of elements in an array that sum up to a specific target.
// Advanced Level:

// Implement a function for binary search in a sorted array.
// Implement various sorting algorithms (e.g., merge sort, quicksort) on an array.
// Given an array of integers, find three numbers whose sum is closest to a given target.
// Implement algorithms to find the maximum subarray sum within an array.
// Implement your version of a data structure like a stack, queue, or priority queue using an array.
