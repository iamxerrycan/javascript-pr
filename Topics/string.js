let str = "rajshish singh"


let correctName = function (string){
    let name = string[0].toUpperCase()
    let final = string.slice(1);
    let finame = name.concat(final)
    return finame;
}
let res = correctName(str);
console.log(res);

let getFullname = function(str){
    let oddname = str.split(" ")
    let name = []
    for (const n of oddname){
        let final = n[0].toUpperCase() + n.slice(1)
        name.push(final)
    }
    return name.join(" ");
}

let ress = getFullname("rajshish singh bhardwaj")
console.log(ress);