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

// const finmejority = (nums) => {
//   let majority = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (majority[nums[i]]) {
//       majority[nums[i]]++;
//     } else {
//       majority[nums[i]] = 1;   // not solved
//     }
//   }
//   for (let key in majority) {
//     if (majority[key] > nums.length / 2) {
//       return key;
//     }
//   }
//   return "no mejority found";
// };

// const res = finmejority([1, 1, 1, 1, 1, 13, 4, 6, 7, 8]);
// console.log(res);

// const ispelindrome = (str) => {
//     let left = 0;
//     let right = str.length - 1;

//     while (left <= right) {
//       if (str[left] !== str[right]) {
//         return false;
//       }
//       left++;
//       right--;
//     }
//     return true
//   };

//   const res = ispelindrome("jhayyfahj")
//   console.log(res);

// const revWord =(str)=>{
//     let word = str.split(' ')
//     let reversed = word.reverse()
//     let revsent = reversed.join(" ")
//     return revsent
// }

// console.log(revWord('i am good !'));

/*
let array = [1, 2, 3, 3, 34, 4, 4, 4];

const removeDuplicates = (arr) => {
  const newarr = [...arr];
  newarr.sort((a, b) => a - b);
  for (let i = 0; i < newarr.length - 1; i++) {
    if (newarr[i] === newarr[i + 1]) {
      newarr.splice(i, 1);
      i--;
    }else{
        i++;
    }
  }
  return newarr;
};

console.log(removeDuplicates([2,2,2,3,3,,4,555,5,555,6,5,8]));
*/

/*
const shortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(shortArray([2,3,4,1,2]));*/
// function linearSearch(array, toFind){
//   for(let i = 0; i < array.length; i++){
//     if(array[i] === toFind) return i;
//   }
// }

// console.log(linearSearch([2,3,4,5,6,7,8],6));

// const strpelindrome = (str)=>{
//   let reversstr = ""
//   for(let i= str.length -1 ; i>=0; i--){
// reversstr += str[i]
//   }
//   if(reversstr===str){
//     return true;}
//   else{
//     return false
//   }
// }

// console.log(strpelindrome("rar"));

// let array = [0,1,2,3,4,5]

// let res1 =array.splice(4,1, "added")
// console.log(res1);
// console.log(array);
// console.log("==================================");

// let arr2 = [0,1,2,3,4,5]

// let res2 = arr2.slice(1,4) // returns the last element of an
// console.log(res2,"res2");

// const consolll = ()=>{
//   console.log("function excuting !");
// }

// const itsinterval= setInterval(consolll, 2000);

// setTimeout(()=>{
//   clearInterval(itsinterval)
//   console.log("ending !");
// }, 10000)

// const dataInterval = setInterval(()=>{
// console.log({name:"something"});
// }, 2000)

// setTimeout(()=>{
//   clearInterval(dataInterval)
//   console.log("no data ");
// } , 10000)

// (()=>{
//   console.log("its a IIFE");
// })()

// const deletelastnum =(arr)=>{
//  arr.splice(-1)
// }

// let arr = [1,2,3,4,5]
// deletelastnum(arr)
// console.log(arr);

// let obj1 = [
//   {
//     name: "John",
//     age: 28,
//     id: 1,
//   },
//   {
//     name: "raj",
//     age: 23,
//     id: 2,
//   },
// ];

// // const res = obj.filter((item)=>{
// //   return  item.id ===1
// // })

// const idofobject = (obj) => {
//   return obj.map((item) => item.id);
// };

// let res = idofobject(obj1);

// console.log(res);

const fistlettercapitalize = (sentence) => {
  let word = sentence.split(" ");
  console.log(word);
  for (i = 0; i < word.length; i++) {
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
};

console.log(fistlettercapitalize("i am rajsjish singh"), "log");
