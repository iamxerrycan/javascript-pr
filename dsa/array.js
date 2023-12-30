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

//===================================== Beginner Level:===============================================================

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

//=================================== Calculate the sum of all elements in an array.===================================

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

// ================================================Reverse an array.=======================================================

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

//================================ Check if an array is sorted in ascending order.=============================================

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

// =================================Merge two sorted arrays into a single sorted array.=========================================
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

//==================================== Find the second largest number in an array.========================================
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


//======================================== Remove duplicates from an array. ==================================================
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

//==================================== Rotate an array to the right by a given number of steps.===============================
// const rotateArray = (arr, n) => {
//     const rotated = [];
//     const len = arr.length;
//     // modulas nikalne par agr step jyda raha arr.len se to undefined nhi dega
//     const steps = n % len;
  
//     for (let i = len - steps; i < len; i++) {
//       rotated.push(arr[i]);
//     }
//     for (let i = 0; i < len - steps; i++) { 
//       rotated.push(arr[i]);
//     }
//     return rotated;
//   };
  
//   // for (let i = steps; i < len; i++) {
//   //   rotated.push(arr[i]);
//   // }
  
//   // Add the remaining elements before the rotation to the new array
//   // for (let i = 0; i < steps; i++) {
//   //   rotated.push(arr[i]);
//   // }
  
//   const array = [1, 2, 3, 4, 5];
//   const stepsToRotate = 6;
//   console.log(rotateArray(array, stepsToRotate)); 


// ==========================Implement a function to perform a linear search in an array.===========================
//============================ Find pairs of elements in an array that sum up to a specific target.==================

// Implement a function for binary search in a sorted array.===========================
// Implement various sorting algorithms (e.g., merge sort, quicksort) on an array.===========
// Given an array of integers, find three numbers whose sum is closest to a given target.
// Implement algorithms to find the maximum subarray sum within an array.
// Implement your version of a data structure like a stack, queue, or priority queue using an array.
// Find the Maximum Sum of Subarray: Calculate the maximum sum of a contiguous subarray within an array.
// Find the Maximum Product of Subarray: Calculate the maximum product of a contiguous subarray within an array.
//Find Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number.
// Find the Intersection of Two Arrays: Write a function that returns an array containing the intersection of two given arrays.
// Product of Array Except Self: Create a function to return an array output such that output[i] is equal to the product of all elements except arr[i].
// Maximum Subarray: Write a function to find the contiguous subarray with the largest sum.
// Spiral Matrix: Given a matrix, return all elements of the matrix in spiral order.
// Sort Colors: Implement an algorithm to sort an array containing 0, 1, and 2 in linear time.
// Merge Intervals: Given a collection of intervals, merge all overlapping intervals.
// Next Permutation: Implement the next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
// Minimum Size Subarray Sum: Find the minimum size subarray length that sums up to a given target.
// Two Sum Problem.
// Container With Most Water.
// Rotate Array.
// Merge Sorted Array.
// Set Matrix Zeroes.
// Pascal's Triangle.
// Best Time to Buy and Sell Stock.
// Missing Number in an Array.
// Majority Element.
// Next Permutation.
// Find First and Last Position of Element in Sorted Array.
// Container With Most Water.
// Permutations II.
// Longest Consecutive Sequence.
// Merge Intervals.
// Maximum Product Subarray.
// Count of Smaller Numbers After Self.
// Combination Sum.
// Search in Rotated Sorted Array.
// Meeting Rooms II.
// 3Sum Problem.
// Find All Duplicates in an Array.
// Trapping Rain Water.
// Move Zeroes.
// Spiral Matrix.
// Best Time to Buy and Sell Stock II.
// Jump Game.
// Product of Array Except Self.
// Maximum Subarray.
// Kth Largest Element in an Array.