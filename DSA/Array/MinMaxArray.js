// without built in function

function arrayMaxMin(arr) {
  if (arr.length === 0) {
    return { min: "input to daalo", max: "bina input ke max kaha milega "};
  }
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    if(arr[i]<min){
        min =arr[i] 
    }else if (arr[i]>max){
        max =arr[i]
    }
  }
  return {min , max}
}

let araay = []
let result = arrayMaxMin(araay)
console.log(result.min);
console.log(result.max);