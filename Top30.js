reverse a string

const { log } = require("console")

let str = "saare jaha se achha"

const savedstr = str.split(" ").map((word)=>{
   return word.split("").reverse().join("")
})

let res = savedstr.join(' ')

console.log(res);======================================

how to check its object or not ?

const checkarr =(el)=>{
     return Array.isArray(el)
}

console.log(checkarr([]));
console.log(checkarr({}));===================================

//howw to empty an array 

let arr = [1,2,3,4,5]

arr.length =0 ;
console.log(arr);===================================

how to check integer or not ?

var a = 12.1;

if(a%1 == 0){
  console.log("integer");
}
else{
  console.log("not!");
}


make a duplicate an array

const duplicateanArray =(arr)=>{
  return arr.concat(arr)
}

console.log(duplicateanArray([1,2,3]));======================


const strr = "raj";

const reverc = (str)=>{
  return str.split("").reverse().join("")
}

console.log(reverc(strr));============================

reverse a num in javascript

let num = 3454;

function reverseNum(n) {
  var res = 0;
  while (n > 0) {
    var rem = n % 10;
    res = res * 10 + rem;
    n = Math.floor(n / 10);
  }
  return res;
}

console.log(reverseNum(12345));======================

write a string that return alphabetical string 

let alphabeticalStr =(str)=>{
  return str.split("").sort().join("")
}

console.log(alphabeticalStr("asdfgh"));=====================================


// object occurence of alphabate corrector

let ocurrence = (srt) => {
  let occ = {};
  srt.split("").forEach((e) => {
    if (occ.hasOwnProperty(e) === false) {
      occ[e] = 1;
    } else {
      occ[e]++;
    }
  });
  return occ;
};

console.log(ocurrence("apple")); =========================

let obj = [
  { name: "raju", gender: "m" },
  { name: "rahul", gender: "m" },
  { name: "raju", gender: "f" },
  { name: "raju", gender: "f" },
];

 Setting count to 1 for the loop to execute once
for (let i = 1; i <= count; i++) {
  for (let j = 0; j < obj.length; j++) {
    if (obj[j].gender !== "m") {
      obj.splice(j, 1); // Remove the element if gender is not "m"
       // Decrement j to account for the removed element
    }
  }
}

let res1 = obj.map((e)=>{
  let gen = []
  if(e.gender !== "f"){
    gen.push(e)
  } else{
    
  }
  return gen;
})

let res = obj.filter((e)=>{
  return e.gender=="m"
})

console.log(res);
console.log(obj);
console.log("res1" ,  res1);
===========================================

