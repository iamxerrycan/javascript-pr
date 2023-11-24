function reversestr(str){
    let rvsdstr =''
    for(let i = str.length - 1 ; i>=0 ; i --){
        rvsdstr = rvsdstr + str[i]
    }
    return rvsdstr;
}

console.log(reversestr('hello'));