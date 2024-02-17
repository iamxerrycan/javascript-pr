//remove last elemnet of array

// const arr = [2,2,3,3,4,5,6,6]

// const removelast =(arr)=>{
//    const nearr = arr.slice(0, -2)
//    return nearr
// }

// console.log(removelast(arr));

// const remove5thEl = (arr) => {
//   const newarr = [...arr];
//   if (newarr.length >= 5) {
//     newarr.splice(4, 1);
//   } else {
//     return "array is not gretter than 5";
//   }

//   return newarr;
// };

// console.log(remove5thEl([3, 4,5,6,7,6,5,4,2]));

//

// const maxnumArray=(arr)=>{
//     if(arr.length === 0){
//         return 'array is emty'
//     }

//     let max =arr[0]
//     for(i=0; i < arr.length ;i++){
//        if(arr[i]>max){
//         max=arr[i]
//        }
//     }
//     return max
// }

// const arr1 = [2,4,5,6,7]
// console.log(maxnumArray(arr1));

// const checkpelindrom =(str)=>{
//     const cleanStr = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
//     const len = cleanStr.length;
//     for(i=0 ; i<len/2;i++){
//         if(cleanStr[i] !== cleanStr[len -1 -i]){
//             return false
//         }
//     }
//     return true
// }

// const res = checkpelindrom('GooggjgooG')
// console.log(res);

// const revString =(str)=>{
//     if(str.length === 0){
//         return 'empty string!'
//     }

//     let revers = ''
//     for(let i = str.length -1; i>=0 ; i--){
//         revers += str[i]
//     }
//     return revers;
// }

// console.log(revString('ramde'));

// const isPrime=(num)=>{
//     if(num<=1){
//         return false
//     }

//     for(let i=2 ; i<num ; i++){
//         if(num % i ===0){
//             return false
//         }
//     }
//     return true
// }
// const res = isPrime(11)

// console.log(res);

// const findMissingNumarr = (num) => {
//   const n = num.length + 1;
//   let some = (n * (n + 1)) / 2;
//   const actualsome = num.reduce((acc, el) => acc + el, 0);
//   return some - actualsome;
// };

// let res = findMissingNumarr([1,2,3,5,6,7])
// console.log(res);

//find the mejority element in array =================[==============]

const finmejority = (nums) => {
  let majority = {};

  for (let i = 0; i < nums.length; i++) {
    if (majority[nums[i]]) {
      majority[nums[i]]++;
    } else {
      majority[nums[i]] = 1;
    }
  }
  for (let key in majority) {
    if (majority[key] > nums.length / 2) {
      return key;
    }
  }
  return "no mejority found";
};

const res = finmejority([1, 1, 1, 1, 1, 13, 4, 6, 7, 8]);
console.log(res);
