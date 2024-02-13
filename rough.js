//remove last elemnet of array

// const arr = [2,2,3,3,4,5,6,6]

// const removelast =(arr)=>{
//    const nearr = arr.slice(0, -2)
//    return nearr
// }

// console.log(removelast(arr));

const remove5thEl = (arr) => {
  const newarr = [...arr];
  if (newarr.length >= 5) {
    newarr.splice(4, 1);
  } else {
    return "array is not gretter than 5";
  }

  return newarr;
};

console.log(remove5thEl([3, 4,5,6,7,6,5,4,2]));
