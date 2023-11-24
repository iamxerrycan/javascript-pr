let arr = [1,3,5,6,7,9]

function maxnum(){
    let max = arr[0]
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxnum(arr));


let arr1 = [1,3,5,6,7,9]

function minnum(){
    let min = arr1[0]
    for(let i = 0 ; i<arr1.length ; i++){
        if(arr1[i]< min){
            min = arr1[i];
        }
    }
    return min;
}

console.log(minnum(arr1), "min");