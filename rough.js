const mergesortedarr = (arr1, arr2) => {
  let mergedarr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedarr.push(arr1[i]);
      i++;
    } else {
      mergedarr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedarr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedarr.push(arr2[j]);
    j++;
  }
  return mergedarr;
};
let ar1 = [1,2,3,4,5]
let ar2 = [5,6,7,8,9,11,44]
console.log(mergesortedarr(ar1, ar2));

// Find the second largest number in an array.=============================================
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
