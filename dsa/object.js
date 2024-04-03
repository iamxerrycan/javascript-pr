// filter out or print all id of an object =============================

// const p1 = [
//     {
//       name: "raj",
//       age: 24,
//       id: 1,
//     },
//     {
//       name: "naj",
//       age: 24,
//       id: 2,
//     },
//     {
//       name: "baj",
//       age: 24,
//       id: 3,
//     },
//     {
//       name: "aaj",
//       age: 24,
//       id: 4,
//     },
//   ];
  
//   const res = p1.filter((e)=>{
//       if(e.id>2){
//           return e;
//       }
//   })
  
//   const res2 = p1.map((e)=>{
//       return e.id
//   })
  
//   console.log(res ,"filter method ");
//   console.log(res2 ,"only id ");

// object . key =======================================================

const person ={
    name: 'syaam',
    age:35,
    id:5
}

const res = Object.keys(person)

const res1 = Object.values(person)
person.age =4;

console.log(res , 'object dot key methos ');
console.log(res1 , 'object dot value methos ');