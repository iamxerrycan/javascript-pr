//How do you find all pairs of an integer array whose sum is equal to a given number?

function findPairsWithSum( arr , target){
    const pairs = [];
    const visited = new Set();

    for (const num of arr){
        let difference = target - num;
        if(visited.has(difference)){
            pairs.push([num , difference])
        }
        visited.add(num)
    }
    return pairs;
}

let arr = [1,3,5,7,9,0,12,16,44]
let result =  findPairsWithSum(arr , 12)
console.log(result);