function isPower3(num){
    if(num<0) return false;
    while(num %3 === 0){
      num /= 3
    }
    return num === 1;
}

console.log(isPower3(27));

function ispower2(num1){
    if(num1<0) return false ;
    while (num1 % 2 ===0){
        num1 /=2 
    }
    return num1 === 1;
}

console.log(ispower2(4));